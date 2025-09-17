/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import PropTypes from 'prop-types';
import { EuiSpacer, EuiText, EuiRadioGroup } from '@elastic/eui';
import { Field } from 'formik';
import VisualGraph from '../../CreateMonitor/components/VisualGraph';
import TriggerExpressions from './TriggerExpressions';

const TriggerGraph = ({
  monitorValues,
  response,
  thresholdValue,
  thresholdEnum,
  fieldPath,
  flyoutMode,
  hideThresholdControls = false,
  showModeSelector = false,
}) => {
  // Always adapt the incoming response to what VisualGraph expects.
  // 1) Prefer any existing buckets (date_histogram / counts / ppl_histogram)
  // 2) If none, but a single "total" exists, synthesize a short series.
  let buckets =
    _.get(response, 'aggregations.date_histogram.buckets') ||
    _.get(response, 'aggregations.counts.buckets') ||
    _.get(response, 'aggregations.ppl_histogram.buckets') ||
    [];

  // If we only have a raw PPL shape with a top-level total (or no aggs at all),
  // build a tiny fake series so the user still sees something.
  if ((!buckets || buckets.length === 0) && Number.isFinite(response?.total)) {
    const total = Number(response.total) || 0;
    const now = Date.now();
    const steps = 12; // 12 bars (~last hour in 5-min steps)
    const stepMs = 5 * 60 * 1000;
    buckets = Array.from({ length: steps }, (_, i) => ({
      key: now - (steps - 1 - i) * stepMs,
      doc_count: total,
    }));
  }

  // Compute a "total" for hits.total.value if available
  const totalFromHits = _.get(response, 'hits.total.value');
  const total =
    (Number.isFinite(totalFromHits) && Number(totalFromHits)) ||
    (Number.isFinite(response?.total) && Number(response.total)) ||
    0;

  const graphResponse = {
    hits: { total: { value: total, relation: 'eq' } },
    aggregations: {
      // Provide a couple of common agg names to match VisualGraph’s expectations
      count_over_time: { buckets },
      combined_value: { buckets },
      // keep PPL name too for any future readers
      ppl_histogram: { buckets },
    },
    ppl_raw: response?.schema ? response : undefined,
  };

  return (
  <div style={flyoutMode ? {} : { padding: '0px 10px' }}>
    {!hideThresholdControls && (
      <TriggerExpressions
        thresholdValue={thresholdValue}
        thresholdEnum={thresholdEnum}
        keyFieldName={`${fieldPath}thresholdEnum`}
        valueFieldName={`${fieldPath}thresholdValue`}
        label="Trigger condition"
        flyoutMode={flyoutMode}
      />
    )}

    {showModeSelector && (
      <>
        <EuiSpacer size="s" />
        <EuiText size="xs">
          <strong>Trigger</strong>
        </EuiText>
        <Field name={`${fieldPath}mode`}>
          {({ field, form }) => (
            <EuiRadioGroup
              options={[
                { id: 'result_set', label: 'Once' },
                { id: 'per_result', label: 'For each result' },
              ]}
              idSelected={field.value === 'per_result' ? 'per_result' : 'result_set'}
              onChange={(id) => form.setFieldValue(`${fieldPath}mode`, id)}
              data-test-subj="triggerMode"
            />
          )}
        </Field>
      </>
    )}    

    {!flyoutMode && (
      <>
        {!hideThresholdControls && <EuiSpacer size="m" />}
        <VisualGraph
          annotation
          values={monitorValues}
          thresholdValue={thresholdValue}
          response={graphResponse}
        />
      </>
    )}
  </div>
 );
};

TriggerGraph.propTypes = {
  monitorValues: PropTypes.object,
  response: PropTypes.any,
  thresholdValue: PropTypes.any,
  thresholdEnum: PropTypes.any,
  fieldPath: PropTypes.string,
  flyoutMode: PropTypes.bool,
  hideThresholdControls: PropTypes.bool,
  showModeSelector: PropTypes.bool,
};

export default TriggerGraph;
