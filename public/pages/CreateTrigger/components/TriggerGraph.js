/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { EuiSpacer, EuiText, EuiRadioGroup } from '@elastic/eui';
import { Field } from 'formik';
import { AlertingVisualGraph } from '../../CreateMonitor/components/VisualGraph/AlertingVisualGraph';
import TriggerExpressions from './TriggerExpressions';

const TriggerGraph = ({
  monitorValues,
  response,            // MUST be a histogram-ish object
  thresholdValue,
  thresholdEnum,
  fieldPath,
  flyoutMode,
  hideThresholdControls = false,
  showModeSelector = false,
}) => {
  // Try common agg names. If still empty, tolerate total-only responses by faking a flat line.
  let buckets =
    _.get(response, 'aggregations.date_histogram.buckets') ||
    _.get(response, 'aggregations.counts.buckets') ||
    _.get(response, 'aggregations.count_over_time.buckets') ||
    _.get(response, 'aggregations.combined_value.buckets') ||
    _.get(response, 'aggregations.ppl_histogram.buckets') ||
    [];

  const total =
    _.get(response, 'hits.total.value') ??
    _.get(response, 'total') ??
    0;

  // If no buckets, synthesize a 24-bar flat series so VisualGraph never shows empty-state.
  if (!buckets || buckets.length === 0) {
    const now = Date.now();
    const hourMs = 60 * 60 * 1000; // 1h
    buckets = [{ key: now - hourMs, doc_count: 0 }];
  }

  // Normalize into a VisualGraph-friendly shape:
  const graphResponse = {
    hits: { total: { value: Math.max(1, Number(total) || 0), relation: 'eq' } },
    aggregations: {
      count_over_time: { buckets },
      combined_value: { buckets },
      date_histogram: { buckets },
      ppl_histogram: { buckets },
    },
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

      {/* {!flyoutMode && (
        <>
          {!hideThresholdControls && <EuiSpacer size="m" />}
          <VisualGraph
            annotation
            values={monitorValues}
            thresholdValue={thresholdValue}
            response={graphResponse}
          />
        </>
      )} */}
      <>
        {!hideThresholdControls && <EuiSpacer size="m" />}
        <AlertingVisualGraph
          values={monitorValues}
          thresholdValue={thresholdValue}
          response={graphResponse}
          services={{}}
        />
      </>
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
