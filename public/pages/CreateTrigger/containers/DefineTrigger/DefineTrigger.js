/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
 import {
  EuiAccordion, 
  EuiButton, 
  EuiCallOut, 
  EuiSpacer, 
  EuiText, 
  EuiTitle,
  EuiFlexGroup, 
  EuiFlexItem, 
  EuiSelect, 
  EuiFieldText, 
  EuiCheckbox, 
  EuiFormRow,
 } from '@elastic/eui';
import { Field, FieldArray } from 'formik';
import 'brace/mode/plain_text';

import { FormikFieldText, FormikSelect } from '../../../../components/FormControls';
import { isInvalid, hasError } from '../../../../utils/validate';
import TriggerQuery from '../../components/TriggerQuery';
import TriggerGraph from '../../components/TriggerGraph';
import { validateTriggerName } from './utils/validation';
import { OS_NOTIFICATION_PLUGIN, SEARCH_TYPE, SEVERITY_OPTIONS } from '../../../../utils/constants';
import { AnomalyDetectorTrigger } from './AnomalyDetectorTrigger';
import { TRIGGER_TYPE } from '../CreateTrigger/utils/constants';
import ConfigureActions from '../ConfigureActions';
import monitorToFormik from '../../../CreateMonitor/containers/CreateMonitor/utils/monitorToFormik';
import { buildRequest } from '../../../CreateMonitor/containers/DefineMonitor/utils/searchRequests';
import { backendErrorNotification } from '../../../../utils/helpers';
import {
  buildClusterMetricsRequest,
  canExecuteClusterMetricsMonitor,
} from '../../../CreateMonitor/components/ClusterMetricsMonitor/utils/clusterMetricsMonitorHelpers';
import { DEFAULT_TRIGGER_NAME } from '../../utils/constants';
import { getTriggerContext } from '../../utils/helper';
import { getDataSourceQueryObj } from '../../../utils/helpers';

/** Normalize PPL preview -> shape that TriggerGraph/TriggerQuery expect */
const normalizePplPreview = (pplResp, { periodStart, periodEnd } = {}) => {
  const schema = pplResp?.schema || [];
  const names = schema.map((c) => c.name);
  const rows = Array.isArray(pplResp?.datarows) ? pplResp.datarows : [];

  const tsIdx = names.findIndex((n) => /(^@timestamp$|^span$|time|timestamp)/i.test(n));
  const valIdx = names.findIndex((n) => /(^total$|count$|doc_count$|value$)/i.test(n));

  let buckets = [];
  if (tsIdx >= 0 && valIdx >= 0 && rows.length) {
    buckets = rows
      .map((r) => ({
        key: typeof r[tsIdx] === 'string' ? Date.parse(r[tsIdx]) : Number(r[tsIdx]),
        doc_count: Number(r[valIdx]) || 0,
      }))
      .filter((b) => Number.isFinite(b.key));
  } else {
    const total = Number(pplResp?.total ?? rows.length ?? 0);
    buckets = [{ key: periodEnd ?? Date.now(), doc_count: total }];
  }

  const total = Number(pplResp?.total ?? rows.length ?? 0);
  return {
    hits: { total: { value: total } },
    aggregations: { ppl_histogram: { buckets } },
  };
};

// One source of truth for width & padding so all rows match the name field
const GRID_MAX = 720;            // tweak to taste; this is the "Trigger name" row width
const GRID_PAD = 10;             // same left pad you're already using
const twoColRowStyle = { paddingLeft: GRID_PAD, maxWidth: GRID_MAX };
const twoColRowProps = { gutterSize: 'm', responsive: false, alignItems: 'flexEnd', style: twoColRowStyle };
const HALF_COL = { flexBasis: '50%', minWidth: 0 };
const TIME_GUTTER_PX = 8; // EUI gutterSize="s" ≈ 8px
const SUPPRESS_TEXT_MAX = 300 * 2 + TIME_GUTTER_PX;


const defaultRowProps = {
  label: 'Trigger name',
  style: { paddingLeft: '10px' },
  isInvalid,
  error: hasError,
};

const THRESHOLD_OPTIONS = [
  { value: 'GREATER_THAN', text: 'Greater than' },
  { value: 'GREATER_THAN_EQUAL', text: 'Greater than equal to' },
  { value: 'LESS_THAN', text: 'Less than' },
  { value: 'LESS_THAN_EQUAL', text: 'Less than equal to' },
  { value: 'EQUAL', text: 'Equal' },
  { value: 'NOT_EQUALS', text: 'Not equal to' },
];

const defaultInputProps = { isInvalid };

const selectFieldProps = { validate: () => {} };

const selectRowProps = {
  label: 'Severity level',
  style: { paddingLeft: '10px', marginTop: '0px' },
  isInvalid,
  error: hasError,
};

const TYPE_OPTIONS = [
  { value: 'number_of_results', text: 'Number of results' },
  { value: 'custom', text: 'Custom' },
];

const triggerOptions = [
  { value: TRIGGER_TYPE.AD, text: 'Anomaly detector grade and confidence' },
  { value: TRIGGER_TYPE.ALERT_TRIGGER, text: 'Extraction query response' },
];

const selectInputProps = { options: SEVERITY_OPTIONS };

const DURATION_OPTIONS = [
  { value: 'seconds', text: 'second(s)' },
  { value: 'minutes', text: 'minute(s)' },
  { value: 'hours', text: 'hour(s)' },
  { value: 'days', text: 'day(s)' },
];

const propTypes = {
  executeResponse: PropTypes.object,
  monitor: PropTypes.object,
  monitorValues: PropTypes.object.isRequired,
  onRun: PropTypes.func.isRequired,
  setFlyout: PropTypes.func.isRequired,
  triggers: PropTypes.arrayOf(PropTypes.object).isRequired,
  triggerValues: PropTypes.object.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  flyoutMode: PropTypes.string,
  submitCount: PropTypes.number,
  // commonly present in callers:
  edit: PropTypes.bool,
  triggerArrayHelpers: PropTypes.object,
  triggerIndex: PropTypes.number,
  httpClient: PropTypes.object,
  notifications: PropTypes.object,
  notificationService: PropTypes.object,
  plugins: PropTypes.arrayOf(PropTypes.string),
  errors: PropTypes.object,
};

const defaultProps = { flyoutMode: null };

class DefineTrigger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OuterAccordion: props.flyoutMode ? ({ children }) => <>{children}</> : EuiAccordion,
      currentSubmitCount: 0,
      accordionsOpen: {},
      executeResponse: undefined,
    };
  }

  componentDidMount() {
    const {
      monitorValues: { searchType, uri },
    } = this.props;
    switch (searchType) {
      case SEARCH_TYPE.CLUSTER_METRICS:
        if (canExecuteClusterMetricsMonitor(uri)) this.onRunExecute(this.props.monitorValues);
        break;
      default:
        this.onRunExecute(this.props.monitorValues);
    }
  }

  onRunExecute = (formikValuesArg, triggers = []) => {
    const { httpClient, monitor, notifications } = this.props;
    const formikValues =
      formikValuesArg || this.props.monitorValues || monitorToFormik(monitor);
    const searchType = formikValues.searchType;

    const isPPL =
      monitor?.query_language === 'ppl' ||
      formikValues?.monitor_mode === 'ppl' ||
      !!monitor?.ppl_monitor ||
      !!formikValues?.pplQuery;

    // --- PPL PREVIEW (NO alerting execute): POST /_plugins/_ppl { query }
    if (isPPL) {
      const pplQuery =
        formikValues?.pplQuery ||
        monitor?.ppl_monitor?.query ||
        monitor?.query ||
        ''; // empty still returns a 400 from PPL

      const dataSourceQuery = getDataSourceQueryObj();
      httpClient
        .post('../_plugins/_ppl', {
          body: JSON.stringify({ query: pplQuery }),
          query: dataSourceQuery?.query,
        })
        .then((resp) => {
          if (resp.ok) {
            const now = Date.now();
            const normalized = normalizePplPreview(resp.resp, {
              periodStart: now - 60 * 1000,
              periodEnd: now,
            });
            // Normalize to the shape other UI parts expect
            const wrapped = {
              ok: true,
              period_start: now - 60 * 1000,
              period_end: now,
              input_results: { results: [normalized] },
              error: null,
            };
            this.setState({ executeResponse: wrapped });
          } else {
            backendErrorNotification(notifications, 'preview', 'query', resp.resp);
          }
        })
        .catch(() => {});
      return;
    }

    // --- Non-PPL path (legacy/other monitor types) ---
    const monitorToExecute = _.cloneDeep(monitor);
    _.set(monitorToExecute, 'triggers', triggers);

    switch (searchType) {
      case SEARCH_TYPE.QUERY:
      case SEARCH_TYPE.GRAPH: {
        const searchRequest = buildRequest(formikValues);
        _.set(monitorToExecute, 'inputs[0]', searchRequest);
        break;
      }
      case SEARCH_TYPE.AD:
        break;
      case SEARCH_TYPE.CLUSTER_METRICS: {
        const clusterMetricsRequest = buildClusterMetricsRequest(formikValues);
        _.set(monitorToExecute, 'inputs[0].uri', clusterMetricsRequest);
        break;
      }
      default:
        break;
    }

    const dataSourceQuery = getDataSourceQueryObj();
    httpClient
      .post('../api/alerting/monitors/_execute', {
        body: JSON.stringify(monitorToExecute),
        query: dataSourceQuery?.query,
      })
      .then((resp) => {
        if (resp.ok) this.setState({ executeResponse: resp.resp });
        else backendErrorNotification(notifications, 'run', 'trigger', resp.resp);
      })
      .catch(() => {});
  };

  onAccordionToggle = (key) => {
    const accordionsOpen = { ...this.state.accordionsOpen };
    accordionsOpen[key] = !accordionsOpen[key];
    this.setState({ accordionsOpen, currentSubmitCount: this.props.submitCount });
  };

  // REPLACEMENT UI for Trigger condition when Type = Custom
  renderCustomCondition = ({ fieldPath, onUpdate }) => (
    <div style={{ paddingLeft: GRID_PAD, maxWidth: GRID_MAX }}>
      <EuiFormRow label="Trigger condition" fullWidth>
        <>
          {/* helper text directly under the label */}
          <EuiText size="xs" color="subdued" style={{ marginBottom: 8 }}>
            Add a custom condition to append to your existing query.
          </EuiText>

          {/* input + button on one line; bar will match Trigger name width */}
          <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
            <EuiFlexItem>
              <Field name={`${fieldPath}customCondition`}>
                {({ field }) => (
                  <EuiFieldText
                    {...field}
                    value={field.value != null ? field.value : ''}
                    fullWidth
                    placeholder="eg: (eval result = count > 3)"
                    data-test-subj="customConditionInput"
                  />
                )}
              </Field>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton size="s" onClick={onUpdate} data-test-subj="updateResults">
                Update results
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </>
      </EuiFormRow>

      {/* optional footnote, still aligned */}
      <EuiText color="subdued" size="xs" style={{ marginTop: 4 }}>
        condition should be limited to supported functions.
      </EuiText>
    </div>
  );

  render() {
    const { OuterAccordion, accordionsOpen, currentSubmitCount, executeResponse } = this.state;
    const {
      edit,
      triggerArrayHelpers,
      monitor,
      monitorValues,
      onRun,
      setFlyout,
      triggers,
      triggerValues,
      isDarkMode,
      triggerIndex,
      httpClient,
      notifications,
      notificationService,
      plugins,
      flyoutMode,
      submitCount,
      errors,
    } = this.props;

    const hasNotificationPlugin = plugins?.indexOf(OS_NOTIFICATION_PLUGIN) !== -1;
    const ctxExec = executeResponse ?? this.props.executeResponse;
    const context = getTriggerContext(ctxExec, monitor, triggerValues, triggerIndex);

    const fieldPath = triggerIndex !== undefined ? `triggerDefinitions[${triggerIndex}].` : '';
    const isGraphLegacy = _.get(monitorValues, 'searchType') === SEARCH_TYPE.GRAPH;
    const isAd = _.get(monitorValues, 'searchType') === SEARCH_TYPE.AD;

    const detectorId = _.get(monitorValues, 'detectorId');
    const response = _.get(ctxExec, 'input_results.results[0]');
    const error = _.get(ctxExec, 'error') || _.get(ctxExec, 'input_results.error');

    const thresholdEnum = _.get(triggerValues, `${fieldPath}thresholdEnum`);
    const thresholdValue = _.get(triggerValues, `${fieldPath}thresholdValue`);
    const adTriggerType = _.get(triggerValues, `${fieldPath}anomalyDetector.triggerType`);
    const triggerName = _.get(triggerValues, `${fieldPath}name`, DEFAULT_TRIGGER_NAME);

    if (flyoutMode && submitCount > currentSubmitCount) {
      this.setState({
        accordionsOpen: {
          ...accordionsOpen,
          triggerCondition:
            accordionsOpen?.metrics ||
            (errors.triggerDefinitions?.[triggerIndex] &&
              'name' in errors.triggerDefinitions?.[triggerIndex]),
        },
        currentSubmitCount: submitCount,
      });
    }

    // figure out current type
    const selectedType =
      _.get(triggerValues, `${fieldPath}uiConditionType`) ||
      _.get(triggerValues, `${fieldPath}type`) ||
      _.get(triggerValues, `${fieldPath}conditionType`) ||
      _.get(triggerValues, `${fieldPath}condition?.type`) ||
      'number_of_results';
    
    const isNumberOfResults = selectedType === 'number_of_results';

    const isPpl =
      monitor?.query_language === 'ppl' || monitorValues?.monitor_mode === 'ppl';

    // Show graph if:
    //  - native Graph monitor, OR
    //  - PPL + "number_of_results" type, OR
    //  - the normalized PPL buckets are present on the response
    const hasPplBuckets =
      _.get(response, 'aggregations.ppl_histogram.buckets.length', 0) > 0 ||
      _.get(response, 'aggregations.count_over_time.buckets.length', 0) > 0;
    const isGraph = isGraphLegacy || (isPpl && selectedType === 'number_of_results') || hasPplBuckets;

    // Name
    const nameField = (
      <FormikFieldText
        name={`${fieldPath}name`}
        fieldProps={{
          validate: (val) =>
            validateTriggerName(triggerValues?.triggerDefinitions, triggerIndex, flyoutMode)(val),
        }}
        formRow
        rowProps={{ ...defaultRowProps, ...(flyoutMode ? { style: {} } : {}), fullWidth: true, style: { paddingLeft: GRID_PAD, maxWidth: GRID_MAX } }}
        inputProps={{ ...defaultInputProps, fullWidth: true }}
      />
    );

    // Severity
    const severityField = (
      <FormikSelect
        name={`${fieldPath}severity`}
        formRow
        fieldProps={selectFieldProps}
        rowProps={{ ...selectRowProps, ...(flyoutMode ? { style: {} } : {}) }}
        inputProps={selectInputProps}
      />
    );

    // Type
    // Make Type fullWidth too
    const typeField = (
      <EuiFormRow label="Type" fullWidth style={{ paddingLeft: 0 }}>
        <Field name={`${fieldPath}uiConditionType`}>
          {({ field, form }) => {
            const derived =
              field.value ||
              _.get(triggerValues, `${fieldPath}type`) ||
              _.get(triggerValues, `${fieldPath}conditionType`) ||
              _.get(triggerValues, `${fieldPath}condition?.type`) ||
              'number_of_results';
            return (
              <EuiSelect
                options={TYPE_OPTIONS}
                value={derived}
                fullWidth
                onChange={(e) => {
                  const v = e.target.value;
                  form.setFieldValue(`${fieldPath}uiConditionType`, v);
                  form.setFieldValue(`${fieldPath}type`, v);
                  form.setFieldValue(`${fieldPath}conditionType`, v);
                  form.setFieldValue(`${fieldPath}condition`, {
                    ...(_.get(triggerValues, `${fieldPath}condition`) || {}),
                    type: v,
                  });
                }}
                data-test-subj="triggerType"
              />
            );
          }}
        </Field>
      </EuiFormRow>
    );

    const numberOfResultsHeader = isNumberOfResults ? (
      <>
        {/* Trigger condition row: left = operator, right = number value */}
        <EuiFlexGroup {...twoColRowProps}>
          <EuiFlexItem grow>
            <FormikSelect
              name={`${fieldPath}thresholdEnum`}
              formRow
              rowProps={{ label: 'Trigger condition', fullWidth: true }}
              inputProps={{ options: THRESHOLD_OPTIONS, fullWidth: true }}
            />
          </EuiFlexItem>
          <EuiFlexItem grow>
            <FormikFieldText
              name={`${fieldPath}thresholdValue`}
              formRow
              rowProps={{ hasEmptyLabelSpace: true, fullWidth: true }}
              inputProps={{ type: 'number', fullWidth: true }}
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        {/* Trigger radios on the left; blank right col to keep grid */}
        <EuiFlexGroup {...twoColRowProps}>
          <EuiFlexItem grow>
            {/* your existing radio group goes here */}
          </EuiFlexItem>
          <EuiFlexItem grow />
        </EuiFlexGroup>
      </>
    ) : null;

    // Build the section that lives where the Trigger condition row is.
    let triggerConditionSection;
    if (isAd && adTriggerType === TRIGGER_TYPE.AD) {
      const adValues = _.get(triggerValues, `${fieldPath}anomalyDetector`);
      triggerConditionSection = (
        <AnomalyDetectorTrigger
          detectorId={detectorId}
          adValues={adValues}
          fieldPath={fieldPath}
          flyoutMode={flyoutMode}
        />
      );
    } else if (isGraph) {
      // GRAPH or PPL(Number of results): show graph; if Custom, show textbox+graph
      // --- Graph path ---
      const showCustom = selectedType === 'custom';

      const graphEl = (
        <TriggerGraph
          monitorValues={monitorValues}
          response={response}
          thresholdEnum={thresholdEnum}
          thresholdValue={thresholdValue}
          fieldPath={fieldPath}
          flyoutMode={flyoutMode}
          hideThresholdControls={true}                 // we render threshold fields ourselves
          showModeSelector={isNumberOfResults}        // let the graph show Once / For each radios
        />
      );

      triggerConditionSection = (
        <>
          {isNumberOfResults && numberOfResultsHeader}  {/* operator + number, our aligned header */}
          {showCustom && (
            <>
              {this.renderCustomCondition({
                fieldPath,
                onUpdate: _.isEmpty(fieldPath)
                  ? () => onRun(this.props.monitorValues)
                  : () => this.onRunExecute(this.props.monitorValues),
              })}
              <EuiSpacer size="m" />
            </>
          )}
          {graphEl}
        </>
      );

    } else {
      // QUERY-level monitors (non-graph): swap UI based on Type
      triggerConditionSection =
        selectedType === 'custom' ? (
          this.renderCustomCondition({
            fieldPath,
            onUpdate: _.isEmpty(fieldPath)
              ? () => onRun(this.props.monitorValues)
              : () => this.onRunExecute(this.props.monitorValues),
          })
        ) : (
          <TriggerQuery
            context={context}
            error={error}
            executeResponse={ctxExec}
            onRun={
              _.isEmpty(fieldPath)
                ? () => onRun(this.props.monitorValues)
                : () => this.onRunExecute(this.props.monitorValues)
            }
            response={response}
            setFlyout={setFlyout}
            triggerValues={triggerValues}
            isDarkMode={isDarkMode}
            fieldPath={fieldPath}
            isAd={isAd}
          />
        );
    }

    // Suppress / Expires
    const suppressEnabled =
      _.get(triggerValues, `${fieldPath}suppressEnabled`) === true ||
      _.get(triggerValues, `${fieldPath}suppress?.enabled`) === true;

    const suppressToggle = (
      <div style={{ paddingLeft: '10px' }}>
        <Field name={`${fieldPath}suppressEnabled`}>
          {({ field, form }) => (
            <EuiCheckbox
              id={`${fieldPath}__suppressEnabled`}
              label="Suppress"
              checked={!!field.value}
              onChange={(e) => {
                const checked = e.target.checked;
                form.setFieldValue(`${fieldPath}suppressEnabled`, checked);
                form.setFieldValue(`${fieldPath}suppress`, {
                  ...(_.get(triggerValues, `${fieldPath}suppress`) || {}),
                  enabled: checked,
                });
              }}
            />
          )}
        </Field>
      </div>
    );

    const TIME_BOX_WIDTH = 300; 

    return (
      <OuterAccordion
        id={triggerName}
        buttonContent={
          <EuiTitle size={'s'} data-test-subj={`${fieldPath}_triggerAccordion`}>
            <h1>{_.isEmpty(triggerName) ? DEFAULT_TRIGGER_NAME : triggerName}</h1>
          </EuiTitle>
        }
        initialIsOpen={edit ? false : triggerIndex === 0}
        extraAction={
          <EuiButton color={'danger'} onClick={() => triggerArrayHelpers.remove(triggerIndex)} size={'s'}>
            Remove trigger
          </EuiButton>
        }
        style={{ paddingBottom: '15px', paddingTop: '10px' }}
      >
        <div style={flyoutMode ? {} : { padding: '0px 20px', paddingTop: '20px' }}>
          {!flyoutMode && (
            <>
              {nameField}
              <EuiSpacer size="m" />
            </>
          )}

          {/* Severity + Type */}
          <EuiFlexGroup {...twoColRowProps} alignItems="flexEnd">
            {/* Severity (unchanged) */}
            <EuiFlexItem grow style={HALF_COL}>
              <FormikSelect
                name={`${fieldPath}severity`}
                formRow
                fieldProps={selectFieldProps}
                rowProps={{ label: 'Severity level', fullWidth: true, style: { paddingLeft: 0 } }}
                inputProps={{ options: SEVERITY_OPTIONS, fullWidth: true }}
              />
            </EuiFlexItem>

            {/* Type — use the SAME FormikSelect helper so it matches Severity */}
            <EuiFlexItem grow style={HALF_COL}>
              <FormikSelect
                name={`${fieldPath}uiConditionType`}
                formRow
                fieldProps={selectFieldProps}
                rowProps={{ label: 'Type', fullWidth: true, style: { paddingLeft: 0 } }}
                inputProps={{
                  options: TYPE_OPTIONS,
                  fullWidth: true,
                  // Optional: if you still need to mirror legacy fields when type changes,
                  // you can add an onChange and set other values here if your FormikSelect
                  // passes it through. If not, uiConditionType alone is enough because
                  // your selectedType logic prefers it first.
                  // onChange: (e) => {
                  //   const v = e.target.value;
                  //   formik.setFieldValue(`${fieldPath}type`, v);
                  //   formik.setFieldValue(`${fieldPath}conditionType`, v);
                  //   formik.setFieldValue(`${fieldPath}condition`, {...});
                  // },
                }}
              />
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiSpacer size="m" />

          {/* Trigger condition area (replaced when Type = Custom) */}
          {triggerConditionSection}

          <EuiSpacer size="l" />

          {/* Suppress */}
          {suppressToggle}
          {suppressEnabled && (
            <>
              <EuiSpacer size="s" />

              {/* NEW: free-text filter with constrained width */}
              <div style={{ paddingLeft: GRID_PAD, maxWidth: SUPPRESS_TEXT_MAX }}>
                <FormikFieldText
                  name={`${fieldPath}suppress.fieldValue`}
                  formRow
                  rowProps={{ label: 'Suppress results containing field value', fullWidth: true, style: { paddingLeft: 0 } }}
                  inputProps={{ placeholder: 'field value', fullWidth: true }}
                />
              </div>
              <EuiSpacer size="s" />

              {/* Existing: Suppress for (value + unit) */}
              <EuiFlexGroup gutterSize="s" style={{ paddingLeft: '10px' }} alignItems="flexEnd">
                <EuiFlexItem grow={false} style={{ width: TIME_BOX_WIDTH }}>
                  <FormikFieldText
                    name={`${fieldPath}suppress.value`}
                    formRow
                    rowProps={{ label: 'Suppress for', fullWidth: true }}
                    inputProps={{ type: 'number', min: 1, fullWidth: true }}
                  />
                </EuiFlexItem>
                <EuiFlexItem grow={false} style={{ width: TIME_BOX_WIDTH }}>
                  <FormikSelect
                    name={`${fieldPath}suppress.unit`}
                    formRow
                    rowProps={{ hasEmptyLabelSpace: true, fullWidth: true }}
                    inputProps={{ options: DURATION_OPTIONS, fullWidth: true }}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </>
          )}

          {/* Expires */}
          <EuiSpacer size="s" />
          <EuiFlexGroup gutterSize="s" style={{ paddingLeft: '10px' }} alignItems="flexEnd">
            <EuiFlexItem grow={false} style={{ width: TIME_BOX_WIDTH }}>
              <FormikFieldText
                name={`${fieldPath}expires.value`}
                formRow
                rowProps={{ label: 'Expires', fullWidth: true }}
                inputProps={{ type: 'number', min: 1, fullWidth: true }}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false} style={{ width: TIME_BOX_WIDTH }}>
              <FormikSelect
                name={`${fieldPath}expires.unit`}
                formRow
                rowProps={{ hasEmptyLabelSpace: true, fullWidth: true }}
                inputProps={{ options: DURATION_OPTIONS, fullWidth: true }}
              />
            </EuiFlexItem>
          </EuiFlexGroup>

          {/* Notifications */}
          <EuiSpacer size="l" />
          <EuiTitle size="xs">
            <h5>Notifications</h5>
          </EuiTitle>
          <EuiSpacer size="m" />

          {((flyoutMode && hasNotificationPlugin) || !flyoutMode) && (
            <FieldArray name={`${fieldPath}actions`} validateOnChange>
              {(arrayHelpers) => (
                <ConfigureActions
                  arrayHelpers={arrayHelpers}
                  context={context}
                  httpClient={httpClient}
                  setFlyout={setFlyout}
                  values={triggerValues}
                  notifications={notifications}
                  fieldPath={fieldPath}
                  triggerIndex={triggerIndex}
                  notificationService={notificationService}
                  plugins={plugins}
                  flyoutMode={flyoutMode}
                  submitCount={submitCount}
                  errors={errors}
                />
              )}
            </FieldArray>
          )}

          {!hasNotificationPlugin && (
            <>
              <EuiCallOut title="The Notifications plugin is not installed" color="warning">
                <p>Alerts still appear on the dashboard visualization when the trigger condition is met.</p>
              </EuiCallOut>
              <EuiSpacer size="m" />
            </>
          )}
        </div>
      </OuterAccordion>
    );
  }
}

DefineTrigger.propTypes = propTypes;
DefineTrigger.defaultProps = defaultProps;

export default DefineTrigger;
