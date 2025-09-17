/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import _ from 'lodash';
import queryString from 'query-string';
import { FORMIK_INITIAL_VALUES } from './constants';
import monitorToFormik from './monitorToFormik';
import { formikToMonitor } from './formikToMonitor';
import { MONITOR_TYPE } from '../../../../../utils/constants';
import { initializeFromQueryParams } from './monitorQueryParams';
import { backendErrorNotification, getDigitId } from '../../../../../utils/helpers';
import {
  formikToTrigger,
  formikToTriggerUiMetadata,
} from '../../../../CreateTrigger/containers/CreateTrigger/utils/formikToTrigger';
import { triggerToFormik } from '../../../../CreateTrigger/containers/CreateTrigger/utils/triggerToFormik';
import { TRIGGER_TYPE } from '../../../../CreateTrigger/containers/CreateTrigger/utils/constants';
import { getInitialTriggerValues } from '../../../../CreateTrigger/components/AddTriggerButton/utils';
import { AGGREGATION_TYPES } from '../../../components/MonitorExpressions/expressions/utils/constants';
import { getDataSourceQueryObj } from '../../../../utils/helpers';

export const getInitialValues = ({
  title,
  index,
  timeField,
  flyoutMode,
  location,
  monitorToEdit,
  edit,
  searchType,
  detectorId,
  embeddable,
}) => {
  let initialValues = _.mergeWith(
    {},
    _.cloneDeep(FORMIK_INITIAL_VALUES),
    initializeFromQueryParams(queryString.parse(location.search)),
    (initialValue, queryValue) => (_.isEmpty(queryValue) ? initialValue : queryValue)
  );

  // allow ?mode=ppl to deep-link into the new flow
  const params = queryString.parse(location.search);
  if (params?.mode === 'ppl') {
    initialValues.monitor_mode = 'ppl';
    initialValues.searchType = 'query'; // keep legacy UIs happy
  }

  if (initialValues?.pplQuery && !initialValues.monitor_mode) {
    initialValues.monitor_mode = 'ppl';
    if (!initialValues.searchType) initialValues.searchType = 'query';
  }

  if (flyoutMode) {
    initialValues.name = `${title} ${getDigitId()}`;
    initialValues.index = index;
    initialValues.timeField = timeField;

    // Add trigger
    const monitorType = initialValues.monitor_type;
    const initialTrigger = getInitialTriggerValues({ flyoutMode, monitorType, triggers: [] });
    initialValues.triggerDefinitions = [initialTrigger];

    // Add aggregations
    initialValues.aggregations = getMetricAgg(embeddable);

    if (searchType) {
      initialValues.searchType = searchType;
    }

    if (detectorId) {
      initialValues.detectorId = detectorId;
      initialValues.period = { interval: 20, unit: 'MINUTES' };
    }
  }

  if (edit && monitorToEdit) {
    const triggers = triggerToFormik(_.get(monitorToEdit, 'triggers', []), monitorToEdit);
    initialValues = {
      ...monitorToFormik(monitorToEdit),
      triggerDefinitions: triggers.triggerDefinitions,
    };
    const isPpl =
      initialValues?.query_language === 'ppl' ||
      monitorToEdit?.query_language === 'ppl' ||
      !!monitorToEdit?.ppl_monitor;
    if (!('monitor_mode' in initialValues)) {
      initialValues.monitor_mode = isPpl ? 'ppl' : 'legacy';
    }
    if (isPpl) {
      initialValues.searchType = 'query';
      initialValues.pplQuery =
        initialValues.pplQuery ||
        monitorToEdit?.ppl_monitor?.query ||
        monitorToEdit?.query ||
        '';
    }
  }

  return initialValues;
};

const getMetricAgg = (embeddable) => {
  let aggregationType = AGGREGATION_TYPES[1].value;
  let fieldName = '';
  if (embeddable?.vis?.data?.aggs?.aggs.length === 1) {
    const agg = embeddable.vis.data.aggs.aggs[0];
    if (agg.schema === 'metric' && !(aggregationType && fieldName) && agg.params.field) {
      aggregationType = agg.__type.dslName;
      fieldName = agg.params.field.spec.name;
    }
  }
  return [
    {
      aggregationType: aggregationType,
      fieldName: fieldName,
    },
  ];
};

export const getPlugins = async (httpClient) => {
  try {
    const dataSourceQuery = getDataSourceQueryObj();
    const pluginsResponse = await httpClient.get('../api/alerting/_plugins', dataSourceQuery);
    if (pluginsResponse.ok) {
      return pluginsResponse.resp.map((plugin) => plugin.component);
    } else {
      console.error('There was a problem getting plugins list');
      return [];
    }
  } catch (e) {
    console.error('There was a problem getting plugins list', e);
    return [];
  }
};

export const prepareTriggers = ({
  trigger,
  triggerMetadata,
  monitor,
  edit,
  triggerToEdit = [],
}) => {
  const { ui_metadata: uiMetadata = {}, triggers, monitor_type } = monitor;
  let updatedTriggers;
  let updatedUiMetadata;

  if (edit) {
    updatedTriggers = _.isArray(trigger) ? trigger.concat(triggers) : [trigger].concat(triggers);
    updatedUiMetadata = {
      ...uiMetadata,
      triggers: { ...uiMetadata.triggers, ...triggerMetadata },
    };
  } else {
    const updatedTriggersMetadata = _.cloneDeep(uiMetadata.triggers || {});

    let triggerType;
    switch (monitor_type) {
      case MONITOR_TYPE.BUCKET_LEVEL:
        triggerType = TRIGGER_TYPE.BUCKET_LEVEL;
        break;
      case MONITOR_TYPE.DOC_LEVEL:
        triggerType = TRIGGER_TYPE.DOC_LEVEL;
        break;
      case MONITOR_TYPE.COMPOSITE_LEVEL:
        triggerType = TRIGGER_TYPE.COMPOSITE_LEVEL;
        break;
      default:
        triggerType = TRIGGER_TYPE.QUERY_LEVEL;
        break;
    }

    if (_.isArray(triggerToEdit)) {
      const names = triggerToEdit.map((entry) => _.get(entry, `${triggerType}.name`));
      names.forEach((name) => delete updatedTriggersMetadata[name]);
      updatedTriggers = _.cloneDeep(trigger);
    } else {
      const { name } = _.get(triggerToEdit, `${triggerType}`);
      delete updatedTriggersMetadata[name];

      const findTriggerName = (element) => {
        return name === _.get(element, `${triggerType}.name`);
      };

      const indexToUpdate = _.findIndex(triggers, findTriggerName);
      updatedTriggers = triggers.slice();
      updatedTriggers.splice(indexToUpdate, 1, trigger);
    }

    updatedUiMetadata = {
      ...uiMetadata,
      triggers: { ...updatedTriggersMetadata, ...triggerMetadata },
    };
  }

  return { triggers: updatedTriggers, ui_metadata: updatedUiMetadata };
};

export const create = async ({
  monitor,
  formikBag,
  httpClient,
  notifications,
  history,
  onSuccess,
}) => {
  const { setSubmitting } = formikBag;

  try {
    const isWorkflow = monitor.workflow_type === MONITOR_TYPE.COMPOSITE_LEVEL;
    const creationPool = isWorkflow ? 'workflows' : 'monitors';
    const dataSourceQuery = getDataSourceQueryObj();
    const resp = await httpClient.post(`../api/alerting/${creationPool}`, {
      body: JSON.stringify(monitor),
      query: dataSourceQuery?.query,
    });

    if (resp.ok) {
      // IMPORTANT: end the Formik submit state BEFORE navigating to avoid setState on unmounted
      setSubmitting(false);

      history.push(`/monitors/${resp.resp._id}?type=${isWorkflow ? 'workflow' : 'monitor'}`);

      if (onSuccess) {
        onSuccess({ monitor: { _id: resp.resp._id, ...monitor } });
      }
    } else {
      setSubmitting(false);
      console.log('Failed to create:', resp);
      backendErrorNotification(notifications, 'create', 'monitor', resp.resp);
    }
  } catch (err) {
    console.error(err);
    formikBag.setSubmitting(false);
  }
};

export const update = async ({ history, updateMonitor, notifications, monitor, formikBag }) => {
  const { setSubmitting } = formikBag;
  const updatedMonitor = _.cloneDeep(monitor);
  try {
    const isWorkflow = updatedMonitor.workflow_type === MONITOR_TYPE.COMPOSITE_LEVEL;
    const resp = await updateMonitor(updatedMonitor);
    setSubmitting(false);
    const { ok, id } = resp;
    if (ok) {
      notifications.toasts.addSuccess(`Monitor "${monitor.name}" successfully updated.`);
      history.push(`/monitors/${id}?type=${isWorkflow ? 'workflow' : 'monitor'}`);
    } else {
      console.log('Failed to update:', resp);
    }
  } catch (err) {
    console.error(err);
    setSubmitting(false);
  }
};

export const submit = ({
  values,
  formikBag,
  edit,
  triggerToEdit,
  history,
  updateMonitor,
  notifications,
  httpClient,
  onSuccess,
}) => {
  let monitor = formikToMonitor(values);

  if (!_.isEmpty(_.get(values, 'triggerDefinitions'))) {
    const monitorUiMetadata = _.get(monitor, 'ui_metadata', {});
    const triggerMetadata = formikToTriggerUiMetadata(values, monitorUiMetadata);
    const triggers = prepareTriggers({
      trigger: formikToTrigger(values, monitorUiMetadata),
      triggerMetadata,
      monitor,
      edit,
      triggerToEdit,
    });
    monitor = { ...monitor, ...triggers };
  }

  if (edit) {
    update({ history, updateMonitor, notifications, monitor, formikBag });
  } else {
    create({ history, monitor, formikBag, httpClient, notifications, onSuccess });
  }
};

/** ----------------------------------------------------------------
 * New helpers (Alerting V2 / PPL)
 * ---------------------------------------------------------------*/

/**
 * Small service wrapper that calls the server (proxy) API for V2 routes.
 * (Preview is handled via /_plugins/_ppl; only create/update live here.)
 */
export const makeAlertingV2Service = (httpClient) => {
  const base = '../api/alerting/v2';

  const withDataSource = () => {
    const ds = getDataSourceQueryObj();
    return ds?.query || {};
  };

  return {
    /** Create a PPL Monitor V2 */
    createMonitor: async (body, { dataSourceId } = {}) => {
      const query = withDataSource();
      if (dataSourceId) query['dataSourceId'] = dataSourceId;
      const r = await httpClient.post(`${base}/monitors`, {
        body: JSON.stringify(body),
        query,
      });
      if (!r.ok) throw r.resp || r;
      return r.resp;
    },

    /** Update an existing PPL Monitor V2 */
    updateMonitor: async (id, body, { ifSeqNo, ifPrimaryTerm, dataSourceId } = {}) => {
      const query = withDataSource();
      if (dataSourceId) query['dataSourceId'] = dataSourceId;
      if (Number.isFinite(ifSeqNo)) query['if_seq_no'] = ifSeqNo;
      if (Number.isFinite(ifPrimaryTerm)) query['if_primary_term'] = ifPrimaryTerm;
      const r = await httpClient.put(`${base}/monitors/${encodeURIComponent(id)}`, {
        body: JSON.stringify(body),
        query,
      });
      if (!r.ok) throw r.resp || r;
      return r.resp;
    },

    /** V2: Get alerts (replaces legacy monitors/alerts) */
    getAlerts: async ({ monitorId, size = 200, from = 0 } = {}) => {
      const query = withDataSource();
      if (monitorId) query.monitorId = monitorId;
      query.size = size;
      query.from = from;
      const r = await httpClient.get(`${base}/alerts`, { query });
      if (!r.ok) throw r.resp || r;
      return r.resp;
    },
  };
};

// Normalize timezone coming from formik (can be array/object/string)
const getTimezoneString = (values) => {
  const tz = values?.timezone;
  // EUI often stores single-selects as arrays of {label, value}
  if (Array.isArray(tz) && tz.length) {
    return tz[0]?.label || tz[0]?.value || 'UTC';
  }
  if (tz && typeof tz === 'object') {
    return tz.label || tz.value || 'UTC';
  }
  if (typeof tz === 'string' && tz.trim()) return tz;
  return 'UTC';
};

export const pplToV2Schedule = (values) => {
  if (values.frequency === 'interval') {
    return {
      period: {
        interval: Number(values.period?.interval || 1),
        unit: values.period?.unit || 'MINUTES',
      },
    };
  }
  if (values.frequency === 'cronExpression' && values.cronExpression) {
    return {
      cron: {
        expression: values.cronExpression,
        timezone: getTimezoneString(values),
      },
    };
  }
  // fallback
  return {
    period: {
      interval: 1,
      unit: 'MINUTES',
    },
  };
};

/** Convert a triggerDefinition from Formik -> ppl trigger payload */
const formikPplTriggerToWire = (t, i = 0) => {
  // Map any legacy enums or friendly labels to backend-supported symbols
  const normalizeNumCondition = (raw) => {
    const v = String(raw ?? '').trim().toLowerCase();
    switch (v) {
      case 'above':
      case 'greater than':
      case '>':
        return '>';
      case 'at least':
      case 'greater than or equal to':
      case '>=':
        return '>=';
      case 'below':
      case 'less than':
      case '<':
        return '<';
      case 'at most':
      case 'less than or equal to':
      case '<=':
        return '<=';
      case 'equal':
      case 'equals':
      case '==':
        return '==';
      case 'not equal':
      case '!=':
        return '!=';
      default:
        return '>='; // safe default
    }
  };
  const normalizeSeverity = (s) => {
    const v = String(s ?? '').toLowerCase();
    if (['info', 'low', 'medium', 'high', 'critical', 'error'].includes(v)) return v;
    if (v === '0') return 'info';
    if (v === '1') return 'low';
    if (v === '2') return 'medium';
    if (v === '3') return 'high';
    if (v === '4') return 'critical';
    return 'info';
  };

  const unitCode = (u) => {
    const v = String(u || '').toLowerCase();
    if (v.startsWith('second')) return 's';
    if (v.startsWith('minute')) return 'm';
    if (v.startsWith('hour')) return 'h';
    if (v.startsWith('day')) return 'd';
    return 'h';
  };

  const packDur = (val, unit) => {
    const n = Number(val);
    if (!Number.isFinite(n) || n <= 0) return null;
    return `${n}${unitCode(unit)}`;
  };

  const type = (t?.uiConditionType || t?.type || t?.conditionType || 'number_of_results').toLowerCase();
  const isNum = type === 'number_of_results';

  const suppress =
    t?.suppress ??
    (t?.suppressEnabled ? packDur(t?.suppress?.value, t?.suppress?.unit) : null);

  const expires =
    t?.expires ??
    (t?.expires?.value ? packDur(t?.expires?.value, t?.expires?.unit) : null) ??
    '7d';

  return {
    name: t?.name || `trigger${i + 1}`,
    severity: normalizeSeverity(t?.severity),
    actions: Array.isArray(t?.actions) ? t.actions : [],
    mode: (t?.mode || 'result_set').toLowerCase(), // 'result_set' | 'per_result'
    type, // 'number_of_results' | 'custom'
    num_results_condition: isNum ? normalizeNumCondition(t?.num_results_condition || t?.thresholdEnum) : null,
    num_results_value: isNum ? Number(t?.num_results_value ?? t?.thresholdValue ?? 1) : null,
    custom_condition: !isNum ? (t?.custom_condition || t?.customCondition || null) : null,
    suppress,
    expires,
    last_triggered_time: null,
  };
};

/**
 * Build the Monitor V2 (PPL) payload expected by backend.
 * Shape: { "ppl_monitor": { ... } }
 */
export const buildPPLMonitorFromFormik = (values) => {
  const defs = Array.isArray(values.triggerDefinitions) ? values.triggerDefinitions : [];
  const triggers = defs.length
    ? defs.map(formikPplTriggerToWire)
    : [
        {
          name: 'trigger1',
          severity: 'info',
          actions: [],
          mode: 'result_set',
          type: 'number_of_results',
          num_results_condition: '>=',
          num_results_value: 1,
          custom_condition: null,
          suppress: null,
          expires: '7d',
          last_triggered_time: null,
        },
      ];

  // Per API doc, look_back_window applies to CRON schedules. Include only when cron was chosen.
  const lookBack = buildLookBackFromFormik(values);

  return {
    ppl_monitor: {
      name: values.name || 'Untitled monitor',
      enabled: !values.disabled,
      schedule: pplToV2Schedule(values),
      look_back_window: lookBack,
      triggers,
      schema_version: 0,
      query_language: 'ppl',
      query: values.pplQuery || '',
    },
  };
};

/** Build compact look back window string from Formik values, e.g. "15m" */
const buildLookBackFromFormik = (values) => {
  const enabled = values?.useLookBackWindow ?? true;
  if (!enabled) return null;
  const n = Number(values?.lookBackAmount ?? 1);
  const amt = Number.isFinite(n) && n > 0 ? Math.floor(n) : 1;
  const unit = String(values?.lookBackUnit || 'hours').toLowerCase();
  const suffix = unit.startsWith('second')
    ? 's'
    : unit.startsWith('minute')
    ? 'm'
    : unit.startsWith('hour')
    ? 'h'
    : 'd';
  return `${amt}${suffix}`;
};


/**
 * Preview PPL by calling the PPL endpoint directly:
 * POST /_plugins/_ppl { query: "<PPL string>" }
 * Returns the raw PPL response. Callers can wrap it into an execute-like shape if needed.
 */
export const runPPLPreview = async (httpClient, { queryText, dataSourceId } = {}) => {
  const dataSourceQuery = getDataSourceQueryObj();
  const query = { ...(dataSourceQuery?.query || {}) };
  if (dataSourceId) query['dataSourceId'] = dataSourceId;

  const resp = await httpClient.post('../_plugins/_ppl', {
    body: JSON.stringify({ query: queryText || '' }),
    query,
  });
  if (!resp.ok) throw resp.resp || resp;
  return resp.resp;
};

/** Create or update a PPL MonitorV2 */
export const submitPPL = async ({
  values,
  formikBag,
  edit,
  monitorToEdit,
  history,
  notifications,
  httpClient,
  dataSourceId,
}) => {
  const { setSubmitting } = formikBag;
  const api = makeAlertingV2Service(httpClient);
  const body = buildPPLMonitorFromFormik(values);

  try {
    if (edit && monitorToEdit?._id) {
      const seqNo = monitorToEdit?._seq_no;
      const primary = monitorToEdit?._primary_term;
      await api.updateMonitor(monitorToEdit._id, body, {
        ifSeqNo: seqNo,
        ifPrimaryTerm: primary,
        dataSourceId,
      });
      // end submit BEFORE routing to avoid "setState on unmounted" warning
      setSubmitting(false);
      notifications.toasts.addSuccess(`Monitor "${values.name}" saved.`);
      history.push(`/monitors/${monitorToEdit._id}?type=monitor`);
    } else {
      await api.createMonitor(body, { dataSourceId });
      // end submit BEFORE routing to avoid "setState on unmounted" warning
      setSubmitting(false);
      notifications.toasts.addSuccess(`Monitor "${values.name}" successfully created.`);
      // Route to list
      history.push(`/monitors`);
    }
  } catch (e) {
    setSubmitting(false);
    notifications.toasts.addDanger(
      e?.message || e?.body?.message || `Failed to ${edit ? 'update' : 'create'} the monitor`
    );
  }
};
