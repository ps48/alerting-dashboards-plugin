/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import PropTypes from 'prop-types';
import { EuiSpacer } from '@elastic/eui';
import VisualGraph from '../../CreateMonitor/components/VisualGraph';
import TriggerExpressions from './TriggerExpressions';

const TriggerGraph = ({
  monitorValues,
  response,
  thresholdValue,
  thresholdEnum,
  fieldPath,
  flyoutMode,
  hideThresholdControls = false, // NEW: when true, hide the comparator/value UI
}) => (
  <div style={flyoutMode ? {} : { padding: '0px 10px' }}>
    {/* Hide the old TriggerExpressions when using Custom type */}
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

    {!flyoutMode && (
      <>
        {/* If TriggerExpressions were hidden, keep spacing consistent when showing the graph */}
        {!hideThresholdControls && <EuiSpacer size="m" />}
        <VisualGraph
          annotation
          values={monitorValues}
          thresholdValue={thresholdValue}
          response={response}
        />
      </>
    )}
  </div>
);

TriggerGraph.propTypes = {
  monitorValues: PropTypes.object,
  response: PropTypes.any,
  thresholdValue: PropTypes.any,
  thresholdEnum: PropTypes.any,
  fieldPath: PropTypes.string,
  flyoutMode: PropTypes.bool,
  /** When true, suppress the comparator/value UI so Custom type can take over */
  hideThresholdControls: PropTypes.bool,
};

export default TriggerGraph;
