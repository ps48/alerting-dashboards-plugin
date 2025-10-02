/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { FieldArray, Formik } from 'formik';
import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
  EuiPanel,
  EuiFormRow,
  EuiTitle,
  EuiButton,
  EuiCodeBlock,
  EuiEmptyPrompt,
  EuiCodeEditor,
  EuiButtonEmpty,
  EuiFieldText,
  EuiTextArea,
  EuiSelect,
  EuiFieldNumber,
  EuiHorizontalRule,
  EuiAccordion,
  EuiSteps,
  EuiTextColor,
  EuiPopover,
  EuiContextMenuPanel,
  EuiContextMenuItem,
  EuiIconTip,
  EuiBadge,
  EuiCheckbox,
  EuiToolTip,
  EuiSwitch,
  EuiConfirmModal, 
  EuiOverlayMask
} from '@elastic/eui';

import DefineMonitor from '../DefineMonitor';
import { FORMIK_INITIAL_VALUES } from './utils/constants';
import { formikToMonitor } from './utils/formikToMonitor';
import { MONITOR_TYPE, SEARCH_TYPE } from '../../../../utils/constants';
import { SubmitErrorHandler } from '../../../../utils/SubmitErrorHandler';
import MonitorDetails from '../MonitorDetails';
import ConfigureTriggers from '../../../CreateTrigger/containers/ConfigureTriggers';
import { triggerToFormik } from '../../../CreateTrigger/containers/CreateTrigger/utils/triggerToFormik';
import WorkflowDetails from '../WorkflowDetails/WorkflowDetails';
import {
  getInitialValues,
  getPlugins,
  submit,
  runPPLPreview,
  submitPPL,
} from './utils/helpers';
import {
  getPerformanceModal,
  RECOMMENDED_DURATION,
} from '../../components/QueryPerformance/QueryPerformance';
import { isDataSourceChanged } from '../../../utils/helpers';
import { PageHeader } from '../../../../components/PageHeader/PageHeader';
import { monaco, loadMonaco } from '@osd/monaco';
import { CoreContext } from '../../../../utils/CoreContext';
import { PplEditor } from '../../components/QueryEditor/PplEditor';
import { PplPreviewTable, pplRespToDocs } from '../../components/PplPreviewTable/PplPreviewTable';
import { SavedQueryManagementComponent } from '../../../../../../../src/plugins/data/public';


class CreateMonitor extends Component {
  static contextType = CoreContext;
  formikRef = React.createRef();

  static defaultProps = {
    edit: false,
    monitorToEdit: null,
    detectorId: null,
    updateMonitor: () => {},
    isDarkMode: false,
  };

  constructor(props) {
    super(props);

    const { location, edit, monitorToEdit } = props;
    const baseInitial = getInitialValues({ location, monitorToEdit, edit });
    const initialValues = {
      ...baseInitial,
      monitor_mode: 'ppl',
      useLookBackWindow: baseInitial.useLookBackWindow ?? true,
      lookBackAmount: baseInitial.lookBackAmount ?? 1,
      lookBackUnit: baseInitial.lookBackUnit || 'hours',
    };
    try {
      const params = new URLSearchParams(location?.search || '');
      console.log('[CreateMonitor] initial pplQuery:', initialValues.pplQuery);
      const incoming = params.get('ppl') || params.get('pplQuery');
      if (incoming) {
        initialValues.pplQuery = decodeURIComponent(incoming);
        console.log('[CreateMonitor] pplQuery inc:', incoming);
        // optional: ensure we’re in PPL mode
        initialValues.monitor_mode = 'ppl';
        // optional: clean the URL so the value doesn’t re-apply on back/forward
        if (props.history?.replace) {
          props.history.replace({ ...location, search: '' });
        }
      }
    } catch {
      // noop — safe fallback if URL parsing fails
    }

    // Helpers to map v2 trigger fields -> Formik fields used by DefineTrigger
    const parseDuration = (val) => {
      // accepts "30m", "7d", "12h", "15min" (we'll be lenient)
      if (!val || typeof val !== 'string') return { value: '', unit: 'minutes' };
      const m = val.trim().match(/^(\d+)\s*([a-zA-Z]+)$/);
      if (!m) return { value: '', unit: 'minutes' };
      const amount = Number(m[1]);
      const u = m[2].toLowerCase();
      let unit = 'minutes';
      if (u.startsWith('m')) unit = 'minutes';
      else if (u.startsWith('h')) unit = 'hours';
      else if (u.startsWith('d')) unit = 'days';
      else if (u.startsWith('s')) unit = 'seconds'; // tolerated, even if UI hides seconds
      return { value: Number.isFinite(amount) ? amount : '', unit };
    };

    const mapComparator = (sym) => {
      // common names used by threshold UIs
      switch (sym) {
        case '>': return 'gt';
        case '>=': return 'gte';
        case '<': return 'lt';
        case '<=': return 'lte';
        case '==':
        case '===': return 'eq';
        case '!=':
        case '!==': return 'ne';
        default: return 'gte';
      }
    };

    const pplTriggerToFormik = (t) => {
      const { value: suppressValue, unit: suppressUnit } = parseDuration(t.suppress);
      const { value: expirationValue, unit: expirationUnit } = parseDuration(t.expires || '7d');
      const thresholdValue = t.num_results_value != null ? Number(t.num_results_value) : '';
      const thresholdEnum = mapComparator(t.num_results_condition);
      return {
        // raw v2 fields preserved
        ...t,
        // fields expected by DefineTrigger/ConfigureTriggers
        name: t.name,
        severity: (t.severity || '').toString().toLowerCase(), // keep lower for data; UI uppercases
        mode: t.mode,
        type: t.type, // 'number_of_results' | 'custom'
        thresholdValue,
        thresholdEnum,     // 'gt' | 'gte' | 'lt' | 'lte' | 'eq' | 'ne'
        custom_condition: t.custom_condition,
        suppressEnabled: !!t.suppress,
        suppress: t.suppress
          ? { value: suppressValue, unit: suppressUnit, enabled: true }
          : undefined,
        expires: t.expires
          ? { value: expirationValue, unit: expirationUnit }
          : undefined,
        queryLevelTrigger: {
          expires: t.expires ?? '',
          suppress: t.suppress ?? '',
          thresholdValue,
          thresholdEnum,
          type: t.type,
          mode: t.mode,
          custom_condition: t.custom_condition,
        },
      };
    };

    const getExistingPplTriggers = (src) => {
      const candidates = [
        src?.ppl_monitor?.triggers,                        // normalized to .ppl_monitor
        src?.monitor_v2?.ppl_monitor?.triggers,            // raw v2 doc shape
        src?.monitor?.ppl_monitor?.triggers,               // sometimes wrapped in .monitor
        src?.monitor?.monitor_v2?.ppl_monitor?.triggers,   // wrapped + v2
        src?.triggers,                                     // normalized .triggers on the root
      ];
      for (const c of candidates) {
        if (Array.isArray(c)) return c;
      }
      return [];
    };

    let triggerToEdit;
    if (edit && monitorToEdit) {
      triggerToEdit = triggerToFormik(_.get(monitorToEdit, 'triggers', []), monitorToEdit);
    }

    if (edit && monitorToEdit) {
      const pplTriggers = getExistingPplTriggers(monitorToEdit);
      if (Array.isArray(pplTriggers) && pplTriggers.length) {
        initialValues.triggerDefinitions = pplTriggers.map((t) => ({
          ...pplTriggerToFormik(t),
          id: t.id,
          actions: Array.isArray(t.actions) ? t.actions : [],
        }));
      }
    }

    this.state = {
      plugins: [],
      response: null,
      performanceResponse: null,
      initialValues,
      triggerToEdit,
      createModalOpen: false,
      formikBag: undefined,
      previewLoading: false,
      previewError: null,
      previewResult: null,
      previewDocs: [],
      previewQuery: '',
      showRaw: false,
      queryLibOpen: false,
      previewOpen: false,
      savedQMenuOpen: false,
      showSavedQueryManager: false,   
      savingInline: false, 
      indices: [],
    };
  }

  // Fetch indices once for the current dataSourceId
  fetchInitialIndices = async () => {
    const { httpClient, landingDataSourceId } = this.props;

    // Prefer the selected DS in the form if present, else landing
    const dsId =
      this.formikRef.current?.values?.dataSourceId || landingDataSourceId;

    if (!dsId) {
      this.setState({ indices: [] });
      return;
    }

    try {
      const resp = await httpClient.get('/api/alerting/indices', {
        query: { dataSourceId: dsId }, // createValidateQuerySchema will read this
      });
      const indices = resp?.indices || [];
      this.setState({ indices });
    } catch (e) {
      this.setState({ indices: [] });
    }
  };

  getSavedQueryService = () => {
    try {
      return this.context?.services?.data?.query?.savedQueries;
    } catch (e) {
      return undefined;
    }
  };

  getNotifications = () => {
    return this.context?.services?.notifications || this.props.notifications;
  };

  handleSaveQuery = async (meta, saveAsNew = false) => {
    const svc = this.getSavedQueryService();
    const toasts = this.getNotifications()?.toasts;
    if (!svc) {
      toasts?.addWarning('Saved query service is not available.');
      return;
    }
    const pplQuery = this.formikRef.current?.values?.pplQuery || '';
    const attributes = {
      title: meta.title,
      description: meta.description,
      query: {
        query: pplQuery,
        language: 'ppl',
      },
    };

    try {
      this.setState({ savingInline: true });
      await svc.saveQuery(attributes, { overwrite: !saveAsNew });
      toasts?.addSuccess(`Your query "${attributes.title}" was saved`);
      this.setState({ savingInline: false, showSavedQueryManager: false });
    } catch (err) {
      this.setState({ savingInline: false });
      toasts?.addDanger(
        (err && err.message) ? `Failed to save query: ${err.message}` : 'Failed to save query.'
      );
      throw err;
    }
  };

  handleLoadSavedQuery = (savedQuery) => {
    const q = savedQuery?.attributes?.query?.query;
    if (typeof q === 'string') {
      this.formikRef.current?.setFieldValue('pplQuery', q);
    } else if (q != null) {
      this.formikRef.current?.setFieldValue('pplQuery', JSON.stringify(q, null, 2));
    }
    this.setState({ showSavedQueryManager: false });
  };

  handleClearSavedQuery = () => {
    this.setState({ showSavedQueryManager: false });
  };

  async componentDidMount() {
    const { httpClient } = this.props;

    const updatePlugins = async () => {
      const newPlugins = await getPlugins(httpClient);
      this.setState({ plugins: newPlugins });
    };

    updatePlugins();
    this.setSchedule();
    this.fetchInitialIndices();
  }

  componentDidUpdate(prevProps) {
    if (isDataSourceChanged(prevProps, this.props)) {
      this.formikRef.current?.setFieldValue(
        'dataSourceId',
        this.props.landingDataSourceId,
        false /* no validate */
      );
    }
  }

  // componentWillUnmount() {
  //   this.props.setFlyout(null);
  // }
  componentWillUnmount() {
    try {
      this.props.setFlyout(null);
    } catch (e) {}
    // if (this._onFocusDisposable) {
    //   try { this._onFocusDisposable.dispose(); } catch (e) {}
    //   this._onFocusDisposable = null;
    // }
    // if (this._pplEditor) {
    //   try { this._pplEditor.dispose(); } catch (e) {}
    //   this._pplEditor = null;
    // }
    // if (this._monacoCompletionDisposable) {
    //   try { this._monacoCompletionDisposable.dispose(); } catch (e) {}
    //   this._monacoCompletionDisposable = null;
    // }
    // this._pplEditor = null;
  }

  resetResponse() {
    this.setState({ response: null, performanceResponse: null });
  }

  onCancel = () => {
    if (this.props.edit) this.props.history.goBack();
    else this.props.history.push('/monitors');
  };

  setSchedule = () => {
    const { edit, monitorToEdit } = this.props;
    const { initialValues } = this.state;

    if (edit) {
      const schedule =
        _.get(monitorToEdit, 'ppl_monitor.schedule') ||
        _.get(monitorToEdit, 'schedule') ||
        { period: FORMIK_INITIAL_VALUES.period };
      const scheduleType = _.keys(schedule)[0];
      switch (scheduleType) {
        case 'cron':
          _.set(initialValues, 'frequency', 'cronExpression');
          break;
        default:
          _.set(initialValues, 'period', schedule.period || FORMIK_INITIAL_VALUES.period);
          break;
      }

      // hydrate look_back_window if present
      const lbw =
        monitorToEdit?.look_back_window ||
        monitorToEdit?.ppl_monitor?.look_back_window ||
        null;
      if (typeof lbw === 'string' && lbw.trim()) {
        const match = lbw.trim().match(/^(\d+)\s*([smhd])$/i);
        if (match) {
          const amount = Number(match[1]);
          const unitShort = match[2].toLowerCase();
          const unit =
            unitShort === 's'
              ? 'seconds'
              : unitShort === 'm'
              ? 'minutes'
              : unitShort === 'h'
              ? 'hours'
              : 'days';
          _.set(initialValues, 'useLookBackWindow', true);
          _.set(initialValues, 'lookBackAmount', Number.isFinite(amount) ? amount : 1);
          _.set(initialValues, 'lookBackUnit', unit);
        }
      }
    }
  };

  evaluateSubmission = (values, formikBag) => {
    const { performanceResponse } = this.props;
    const { createModalOpen } = this.state;
    const monitorDurationCallout = _.get(performanceResponse, 'took') >= RECOMMENDED_DURATION;

    const requestDurationCallout =
      _.get(performanceResponse, 'invalid.path') >= RECOMMENDED_DURATION;
    const displayPerfCallOut = monitorDurationCallout || requestDurationCallout;

    if (!createModalOpen && displayPerfCallOut) {
      this.setState({
        createModalOpen: true,
        formikBag: formikBag,
      });
    } else {
      this.onSubmit(values, formikBag);
    }
  };

  onSubmit = (values, formikBag) => {
    const {
      edit,
      history,
      updateMonitor,
      notifications,
      httpClient,
      monitorToEdit,
      landingDataSourceId,
    } = this.props;
    const { triggerToEdit } = this.state;

    // ppl
    if (values.monitor_mode === 'ppl') {
      submitPPL({
        values,
        formikBag,
        edit,
        monitorToEdit,
        history,
        notifications,
        httpClient,
        dataSourceId: values.dataSourceId || landingDataSourceId,
      });
      return;
    }

    // legacy
    submit({
      values,
      formikBag,
      edit,
      triggerToEdit,
      history,
      updateMonitor,
      notifications,
      httpClient,
      onSuccess: async ({ monitor }) => {
        notifications.toasts.addSuccess(`Monitor "${monitor.name}" successfully created.`);
      },
    });
  };

  onCloseTrigger = () => {
    this.props.history.push({ ...this.props.location, search: '' });
  };

  buildMonitorForTriggers = (values) => {
    if (values.monitor_mode === 'ppl') {
      // Robustly get existing PPL triggers from any supported shape
      const getExistingPplTriggers = (src) => {
        const candidates = [
          src?.ppl_monitor?.triggers,
          src?.monitor_v2?.ppl_monitor?.triggers,
          src?.monitor?.ppl_monitor?.triggers,
          src?.monitor?.monitor_v2?.ppl_monitor?.triggers,
          src?.triggers,
        ];
        for (const c of candidates) {
          if (Array.isArray(c)) return c;
        }
        return [];
      };
      const existingTriggers =
        this.props.edit && this.props.monitorToEdit
          ? getExistingPplTriggers(this.props.monitorToEdit)
          : [];

      return {
        name: values.name || '',
        type: 'monitor',
        monitor_type: MONITOR_TYPE.QUERY_LEVEL,
        enabled: true,
        schedule: { period: { interval: 1, unit: 'MINUTES' } },
        inputs: [{ search: { indices: [], query: { match_all: {} } } }],
        ui_metadata: {
          search: { searchType: 'query' },
          triggers: {},
        },
        // Feed existing PPL triggers to ConfigureTriggers in edit flow
        triggers: existingTriggers,
      };
    }

    const monitor = formikToMonitor(values) || {};
    if (!Array.isArray(monitor.inputs) || monitor.inputs.length === 0) {
      monitor.inputs = [{ search: { indices: [], query: { match_all: {} } } }];
      return monitor;
    }
    const first = monitor.inputs[0];
    if (!first.search) first.search = { indices: [], query: { match_all: {} } };
    if (!Array.isArray(first.search.indices)) first.search.indices = [];
    if (!first.search.query) first.search.query = { match_all: {} };
    return monitor;
  };

  renderPplDetailsBody = (values, setFieldValue) => (
    <>
      <EuiFormRow label="Monitor name">
        <EuiFieldText
          data-test-subj="pplName"
          value={values.name}
          onChange={(e) => setFieldValue('name', e.target.value)}
          placeholder="Enter a monitor name"
        />
      </EuiFormRow>

      <EuiFormRow
        label={
          <>
            <span className="euiFormLabel">Description</span>{' '}
            <EuiTextColor color="subdued">
              <span>- optional</span>
            </EuiTextColor>
          </>
        }
      >
        <EuiTextArea
          data-test-subj="pplDescription"
          value={values.description || ''}
          onChange={(e) => setFieldValue('description', e.target.value)}
          placeholder="Describe the monitor"
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="useLegacyMonitorsPplInline"
          label={
            <span>
              Use legacy monitors{' '}
              <EuiToolTip content="Use pre-existing monitor types available in legacy alerts.">
                <EuiIconTip type="iInCircle" />
              </EuiToolTip>
            </span>
          }
          checked={values.monitor_mode === 'legacy'}
          onChange={(e) => setFieldValue('monitor_mode', e.target.checked ? 'legacy' : 'ppl')}
          data-test-subj="useLegacyCheckboxPplInline"
        />
      </EuiFormRow>
    </>
  );

  renderPplQueryBody = (values, setFieldValue) => (
    <>
      <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" gutterSize="s" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiBadge color="hollow" data-test-subj="pplBadge" style={{ borderRadius: 8, padding: '2px 10px', fontWeight: 700 }}>
                PPL
              </EuiBadge>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              {/* Saved queries: dropdown with Save / Open, plus the manager UI */}
              <EuiPopover
                isOpen={this.state.savedQMenuOpen}
                closePopover={() => this.setState({ savedQMenuOpen: false })}
                panelPaddingSize="s"
                button={
                  <EuiButtonEmpty
                    size="s"
                    onClick={() => this.setState((s) => ({ savedQMenuOpen: !s.savedQMenuOpen }))}
                    iconType="arrowDown"
                    iconSide="right"
                    data-test-subj="savedQueriesButton"
                  >
                    Saved queries
                  </EuiButtonEmpty>
                }
              >
                <EuiContextMenuPanel
                  items={[
                    <EuiContextMenuItem
                      key="save"
                      data-test-subj="savedQueriesSaveItem"
                      onClick={() => {
                        // open the manager in "save" mode
                        this.setState({ showSavedQueryManager: true, savedQMenuOpen: false });
                      }}
                    >
                      Save query
                    </EuiContextMenuItem>,
                    <EuiContextMenuItem
                      key="open"
                      data-test-subj="savedQueriesOpenItem"
                      onClick={() => {
                        // open the manager in "open" mode (same component; user picks one)
                        this.setState({ showSavedQueryManager: true, savedQMenuOpen: false });
                      }}
                    >
                      Open query
                    </EuiContextMenuItem>,
                  ]}
                />
              </EuiPopover>

              {/* Manager UI (same component handles saving and opening) */}
              {this.state.showSavedQueryManager && (
                <EuiOverlayMask>
                  <div style={{ zIndex: 10000 }}>
                    <SavedQueryManagementComponent
                      // services
                      savedQueryService={this.getSavedQueryService()}
                      // loading a saved query -> writes into the editor
                      onLoad={this.handleLoadSavedQuery}
                      // clearing (no-op for this screen)
                      onClearSavedQuery={this.handleClearSavedQuery}
                      // “Save” actions
                      onInitiateSave={() => {}}
                      onInitiateSaveAsNew={() => {}}
                      showSaveQuery={true}
                      saveQuery={this.handleSaveQuery}
                      useNewSavedQueryUI={true}
                      closeMenuPopover={() => this.setState({ showSavedQueryManager: false })}
                    />
                  </div>
                </EuiOverlayMask>
              )}
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem grow={false}>
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiButton
                size="s"
                onClick={async () => {
                  const { httpClient, landingDataSourceId } = this.props;
                  this.setState({
                    previewLoading: true,
                    previewError: null,
                    previewResult: null,
                    previewDocs: [],
                    previewQuery: '',
                    previewOpen: true,       
                  });
                  try {
                    const data = await runPPLPreview(httpClient, {
                      queryText: values.pplQuery || '',
                      dataSourceId: values.dataSourceId || landingDataSourceId,
                    });
                    this.setState({
                      previewResult: data,
                      previewDocs: pplRespToDocs(data),
                      previewQuery: values.pplQuery || '',
                      previewLoading: false,
                      previewOpen: true,
                    });
                  } catch (e) {
                    this.setState({
                      previewError: e?.body?.message || e?.message || 'Preview failed',
                      previewLoading: false,
                      previewOpen: true,
                    });
                  }
                }}
                isLoading={this.state.previewLoading}
                data-test-subj="runPreview"
              >
                Run preview
              </EuiButton>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiIconTip
                type="iInCircle"
                content="Write queries in PPL. Use Query library for saved or example queries."
                position="left"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="s" />
      
      {/* Monaco editor with autocomplete */}
      <div data-test-subj="pplEditorMonaco">
        <PplEditor
          value={values.pplQuery || ''}
          onChange={(text) => setFieldValue('pplQuery', text)}
          height={220}
          indices={this.state.indices}
          fields={['_source','@timestamp','user.id','http.status_code']}
        />
      </div>

      <EuiSpacer size="m" />

      <EuiAccordion
          id="pplPreviewAccordion"
          buttonContent="Preview results"
          paddingSize="m"
          data-test-subj="pplPreviewAccordion"
          forceState={this.state.previewOpen ? 'open' : 'closed'}
          onToggle={(isOpen) => this.setState({ previewOpen: isOpen })}
        >
        <EuiPanel hasBorder paddingSize="l" data-test-subj="pplResultsPanel">
          <EuiTitle size="s"><h2>Results</h2></EuiTitle>
          <EuiHorizontalRule margin="m" />
          {!this.state.previewResult && !this.state.previewError ? (
            <EuiEmptyPrompt iconType="editorCodeBlock" title={<h3>Run a query to view results</h3>} layout="vertical" />
          ) : this.state.previewError ? (
            <EuiCodeBlock isCopyable>{this.state.previewError}</EuiCodeBlock>
          ) : (
            <>
              {/* Executed query */}
              <EuiText size="s"><strong>Query</strong></EuiText>
              <EuiCodeBlock fontSize="s" paddingSize="s" isCopyable>
                {this.state.previewQuery || '(empty)'}
              </EuiCodeBlock>

              <EuiFlexGroup alignItems="center" justifyContent="spaceBetween" gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiText size="s"><strong>Preview</strong></EuiText>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiSwitch
                    label="Raw JSON"
                    checked={this.state.showRaw}
                    onChange={(e) => this.setState({ showRaw: e.target.checked })}
                    data-test-subj="pplPreviewRawToggle"
                  />
                </EuiFlexItem>
              </EuiFlexGroup>

              {this.state.showRaw ? (
                <EuiCodeBlock language="json" isCopyable>
                  {JSON.stringify(this.state.previewResult, null, 2)}
                </EuiCodeBlock>
              ) : (
                <PplPreviewTable
                  docs={this.state.previewDocs}
                  isLoading={this.state.previewLoading}
                />
              )}
            </>
          )}
        </EuiPanel>
      </EuiAccordion>
    </>
  );

  // ---- PPL Schedule (unchanged) ----
  renderPplScheduleBody = (values, setFieldValue) => {
    console.log("value query:", values.pplQuery);
    const useLB = values.useLookBackWindow ?? true;
    const lbAmount = Number(values.lookBackAmount ?? 1);
    const lbUnit = values.lookBackUnit || 'hours';

    const LookBackControls = (
      <>
        <EuiFormRow>
          <EuiCheckbox
            id="useLookBackWindow"
            label="Add look back window"
            checked={useLB}
            onChange={(e) => setFieldValue('useLookBackWindow', e.target.checked)}
            data-test-subj="pplUseLookBack"
          />
        </EuiFormRow>

        {useLB && (
          <EuiFormRow label="Look back from">
            <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
              <EuiFlexItem grow={false} style={{ width: 140 }}>
                <EuiFieldNumber
                  data-test-subj="pplLookBackAmount"
                  min={1}
                  value={lbAmount}
                  onChange={(e) =>
                    setFieldValue('lookBackAmount', Math.max(1, Number(e.target.value) || 1))
                  }
                />
              </EuiFlexItem>

              <EuiFlexItem grow={false} style={{ width: 220 }}>
                <EuiSelect
                  data-test-subj="pplLookBackUnit"
                  options={[
                    { value: 'seconds', text: 'Second(s) ago' },
                    { value: 'minutes', text: 'Minute(s) ago' },
                    { value: 'hours', text: 'Hour(s) ago' },
                    { value: 'days', text: 'Day(s) ago' },
                  ]}
                  value={lbUnit}
                  onChange={(e) => setFieldValue('lookBackUnit', e.target.value)}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFormRow>
        )}
      </>
    );

    return (
      <>
        <EuiFormRow label="Frequency">
          <EuiSelect
            data-test-subj="pplFrequency"
            options={[
              { value: 'interval', text: 'By interval' },
              { value: 'daily', text: 'Daily' },
              { value: 'weekly', text: 'Weekly' },
              { value: 'monthly', text: 'Monthly' },
              { value: 'cronExpression', text: 'Custom cron job' },
            ]}
            value={values.frequency}
            onChange={(e) => setFieldValue('frequency', e.target.value)}
          />
        </EuiFormRow>

        {values.frequency === 'interval' && (
          <>
            <EuiFormRow label="Run every">
              <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
                <EuiFlexItem grow={false} style={{ width: 140 }}>
                  <EuiFieldNumber
                    data-test-subj="pplIntervalValue"
                    min={1}
                    value={values.period?.interval ?? 1}
                    onChange={(e) => setFieldValue('period.interval', Number(e.target.value) || 1)}
                  />
                </EuiFlexItem>
                <EuiFlexItem grow={false} style={{ width: 200 }}>
                  <EuiSelect
                    data-test-subj="pplIntervalUnit"
                    options={[
                      { value: 'MINUTES', text: 'minute(s)' },
                      { value: 'HOURS', text: 'hour(s)' },
                      { value: 'DAYS', text: 'day(s)' },
                    ]}
                    value={values.period?.unit || 'MINUTES'}
                    onChange={(e) => setFieldValue('period.unit', e.target.value)}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFormRow>

          </>
        )}

        {values.frequency === 'cronExpression' && (
          <>
            <EuiFormRow label="Run every">
              <EuiTextArea
                data-test-subj="pplCronExpression"
                value={values.cronExpression || ''}
                onChange={(e) => setFieldValue('cronExpression', e.target.value)}
                placeholder="0 */1 * * *"
                rows={2}
              />
            </EuiFormRow>
            <EuiText size="xs" color="subdued">
              Use cron expressions for complex schedules
            </EuiText>

            <EuiSpacer size="m" />
          </>
        )}
        {LookBackControls}
      </>
    );
  };
  // ---- END PPL schedule ----

  renderStepPanel = ({ id, title, children, initialIsOpen = true }) => (
    <EuiPanel hasBorder paddingSize="none">
      <EuiAccordion
        id={id}
        initialIsOpen={initialIsOpen}
        paddingSize="m"
        arrowDisplay="left"
        buttonContent={
          <EuiTitle size="s">
            <h2>{title}</h2>
          </EuiTitle>
        }
      >
        {children}
      </EuiAccordion>
    </EuiPanel>
  );

  render() {
    const {
      edit,
      history,
      httpClient,
      location,
      monitorToEdit,
      notifications,
      isDarkMode,
      notificationService,
    } = this.props;
    const { createModalOpen, initialValues, plugins } = this.state;

    return (
      <div style={{ padding: '16px' }}>
        <Formik
          innerRef={this.formikRef}
          initialValues={initialValues}
          onSubmit={this.evaluateSubmission}
          validateOnChange={false}
          enableReinitialize={false}
        >
          {({ values, errors, handleSubmit, isSubmitting, isValid, touched, setFieldValue }) => {
            const isComposite = values.monitor_type === MONITOR_TYPE.COMPOSITE_LEVEL;
            const safeMonitor = this.buildMonitorForTriggers(values);
            const safeTriggers = _.get(safeMonitor, 'triggers', []);

            const LegacyToggleHeader = (
              <EuiCheckbox
                id="useLegacyMonitorsHeader"
                label={
                  <span>
                    Use legacy monitors{' '}
                    <EuiToolTip content="Use pre-existing monitor types available in legacy alerts.">
                      <EuiIconTip type="iInCircle" data-test-subj="legacyInfoHeader" />
                    </EuiToolTip>
                  </span>
                }
                checked={values.monitor_mode === 'legacy'}
                onChange={(e) => setFieldValue('monitor_mode', e.target.checked ? 'legacy' : 'ppl')}
                data-test-subj="useLegacyCheckboxHeader"
              />
            );

            const LegacyToggleInline = (
              // Shown only in Legacy flow (bottom of Monitor Details card area)
              <EuiFormRow fullWidth>
                <EuiCheckbox
                  id="useLegacyMonitorsInline"
                  label={
                    <span>
                      Use legacy monitors{' '}
                      <EuiToolTip content="Use pre-existing monitor types available in legacy alerts.">
                        <EuiIconTip type="iInCircle" data-test-subj="legacyInfoInline" />
                      </EuiToolTip>
                    </span>
                  }
                  checked={values.monitor_mode === 'legacy'}
                  onChange={(e) => setFieldValue('monitor_mode', e.target.checked ? 'legacy' : 'ppl')}
                  data-test-subj="useLegacyCheckboxInline"
                />
              </EuiFormRow>
            );

            return (
              <Fragment>
              <PageHeader>
                <EuiText size="s">
                  <h1>{edit ? 'Edit' : 'Create'} monitor</h1>
                </EuiText>
              </PageHeader>

                {values.monitor_mode === 'ppl' ? (
                  <div data-test-subj="pplBranch">
                    <EuiSteps
                      firstStepNumber={1}
                      titleSize="xs"
                      steps={[
                        {
                          title: ' ',
                          children: this.renderStepPanel({
                            id: 'pplStep1',
                            title: 'Monitor details',
                            children: this.renderPplDetailsBody(values, setFieldValue),
                          }),
                        },
                        {
                          title: ' ',
                          children: this.renderStepPanel({
                            id: 'pplStep2',
                            title: 'Query',
                            children: this.renderPplQueryBody(values, setFieldValue),
                          }),
                        },
                        {
                          title: ' ',
                          children: this.renderStepPanel({
                            id: 'pplStep3',
                            title: 'Schedule',
                            children: this.renderPplScheduleBody(values, setFieldValue),
                          }),
                        },
                        {
                          title: ' ',
                          children: this.renderStepPanel({
                            id: 'pplStep4',
                            title: 'Triggers',
                            children: (
                              <>
                                <FieldArray name="triggerDefinitions" validateOnChange>
                                  {(triggerArrayHelpers) => (
                                    <ConfigureTriggers
                                      edit={edit}
                                      triggerArrayHelpers={triggerArrayHelpers}
                                      monitor={safeMonitor}
                                      monitorValues={values}
                                      touched={touched}
                                      setFlyout={this.props.setFlyout}
                                      triggers={safeTriggers}
                                      triggerValues={values}
                                      isDarkMode={this.props.isDarkMode}
                                      httpClient={httpClient}
                                      notifications={notifications}
                                      notificationService={notificationService}
                                      plugins={plugins}
                                    />
                                  )}
                                </FieldArray>

                                <EuiSpacer />
                                <EuiFlexGroup alignItems="center" justifyContent="flexEnd">
                                  <EuiFlexItem grow={false}>
                                    <EuiSmallButtonEmpty onClick={this.onCancel}>
                                      Cancel
                                    </EuiSmallButtonEmpty>
                                  </EuiFlexItem>
                                  <EuiFlexItem grow={false}>
                                    <EuiSmallButton fill onClick={handleSubmit} isLoading={isSubmitting}>
                                      {edit ? 'Save' : 'Create'}
                                    </EuiSmallButton>
                                  </EuiFlexItem>
                                </EuiFlexGroup>
                              </>
                            ),
                          }),
                        },
                      ]}
                    />
                  </div>
                ) : (
                  <div data-test-subj="legacyBranch">
                    {/* Monitor Details card */}
                    <MonitorDetails
                      values={values}
                      errors={errors}
                      history={history}
                      httpClient={httpClient}
                      monitorToEdit={monitorToEdit}
                      plugins={plugins}
                      isAd={values.searchType === SEARCH_TYPE.AD}
                      detectorId={this.props.detectorId}
                      setFlyout={this.props.setFlyout}
                    />

                    {/* Place the legacy toggle RIGHT BELOW the Monitor Details card
                        (i.e., after schedule's "Run every" UI) */}
                    <EuiSpacer size="s" />
                    {LegacyToggleInline}
                    <EuiSpacer />

                    {isComposite && (
                      <>
                        <WorkflowDetails
                          isDarkMode={isDarkMode}
                          values={values}
                          httpClient={httpClient}
                          errors={errors}
                        />
                        <EuiSpacer />
                      </>
                    )}

                    {values.searchType !== SEARCH_TYPE.AD &&
                      values.monitor_type !== MONITOR_TYPE.COMPOSITE_LEVEL &&
                      !values.preventVisualEditor && (
                        <div>
                          <DefineMonitor
                            values={values}
                            errors={errors}
                            touched={touched}
                            httpClient={httpClient}
                            location={location}
                            detectorId={this.props.detectorId}
                            notifications={notifications}
                            isDarkMode={isDarkMode}
                            landingDataSourceId={this.props.landingDataSourceId}
                          />
                          <EuiSpacer />
                        </div>
                      )}

                    <FieldArray name="triggerDefinitions" validateOnChange>
                      {(triggerArrayHelpers) => (
                        <ConfigureTriggers
                          edit={edit}
                          triggerArrayHelpers={triggerArrayHelpers}
                          monitor={safeMonitor}
                          monitorValues={values}
                          touched={touched}
                          setFlyout={this.props.setFlyout}
                          triggers={safeTriggers}
                          triggerValues={values}
                          isDarkMode={this.props.isDarkMode}
                          httpClient={httpClient}
                          notifications={notifications}
                          notificationService={notificationService}
                          plugins={plugins}
                        />
                      )}
                    </FieldArray>

                    <EuiSpacer />
                    <EuiFlexGroup alignItems="center" justifyContent="flexEnd">
                      <EuiFlexItem grow={false}>
                        <EuiSmallButtonEmpty onClick={this.onCancel}>Cancel</EuiSmallButtonEmpty>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiSmallButton fill onClick={handleSubmit} isLoading={isSubmitting}>
                          {edit ? 'Save' : 'Create'}
                        </EuiSmallButton>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </div>
                )}

                <SubmitErrorHandler
                  errors={errors}
                  isSubmitting={isSubmitting}
                  isValid={isValid}
                  onSubmitError={() =>
                    notifications.toasts.addDanger({
                      title: `Failed to ${edit ? 'update' : 'create'} the monitor`,
                      text: 'Fix all highlighted error(s) before continuing.',
                    })
                  }
                />

                {createModalOpen &&
                  getPerformanceModal({
                    edit: edit,
                    onClose: () => {
                      this.state.formikBag.setSubmitting(false);
                      this.setState({ createModalOpen: false, formikBag: undefined });
                    },
                    onSubmit: () => {
                      this.onSubmit(values, this.state.formikBag);
                      this.setState({ createModalOpen: false });
                    },
                    values: values,
                  })}
              </Fragment>
            );
          }}
        </Formik>
      </div>
    );
  }
}
export default CreateMonitor;