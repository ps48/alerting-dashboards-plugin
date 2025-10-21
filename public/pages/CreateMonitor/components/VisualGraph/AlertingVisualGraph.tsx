/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useCallback } from 'react';
import {
  AnnotationDomainType,
  Axis,
  Chart,
  HistogramBarSeries,
  LineAnnotation,
  Position,
  ScaleType,
  Settings,
  TooltipType,
} from '@elastic/charts';
import { EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import moment from 'moment-timezone';
import { euiThemeVars } from '@osd/ui-shared-deps/theme';
import './AlertingVisualGraph.scss';

interface AlertingVisualGraphProps {
  response: any;
  thresholdValue?: number;
  values: any;
  services: any;
}

interface ChartData {
  values: Array<{
    x: number;
    y: number;
  }>;
  xAxisOrderedValues: number[];
  xAxisFormat: any;
  xAxisLabel: string;
  yAxisLabel?: string;
  ordered: {
    date: boolean;
    interval: any;
    intervalOpenSearchUnit: string;
    intervalOpenSearchValue: number;
    min: any;
    max: any;
  };
}

/**
 * Process PPL response to create chart data similar to Discover's histogram
 */
const processPPLResponseToChartData = (response: any): ChartData | null => {
  if (!response || !response.aggregations) {
    return null;
  }

  // Extract histogram buckets from various possible aggregation structures
  const buckets = 
    response.aggregations.ppl_histogram?.buckets ||
    response.aggregations.count_over_time?.buckets ||
    response.aggregations.date_histogram?.buckets ||
    response.aggregations.combined_value?.buckets ||
    [];

  if (!Array.isArray(buckets) || buckets.length === 0) {
    return null;
  }

  // Convert buckets to chart values
  const values = buckets
    .map((bucket: any) => {
      const timestamp = bucket.key_as_string || bucket.keyAsString || bucket.key || bucket.span || bucket.window || bucket.bucket;
      const count = Number(
        bucket.doc_count ?? 
        bucket.count ?? 
        bucket['count()'] ?? 
        bucket.total ?? 
        bucket.value ?? 
        0
      ) || 0;

      // Convert timestamp to number
      let x: number;
      if (timestamp instanceof Date) {
        x = timestamp.getTime();
      } else if (typeof timestamp === 'number') {
        x = timestamp;
      } else {
        const parsedDate = new Date(String(timestamp));
        x = parsedDate.getTime();
      }

      // Only include valid timestamps and counts
      if (Number.isFinite(x) && Number.isFinite(count) && x > 0) {
        return { x, y: count };
      }
      return null;
    })
    .filter(Boolean)
    .sort((a: any, b: any) => a.x - b.x);

  if (values.length === 0) {
    return null;
  }

  // Create chart data structure similar to Discover
  const chartData: ChartData = {
    values,
    xAxisOrderedValues: values.map(v => v.x),
    xAxisFormat: {
      id: 'date',
      params: { pattern: 'YYYY-MM-DD HH:mm:ss' }
    },
    xAxisLabel: 'Time',
    yAxisLabel: 'Count',
    ordered: {
      date: true,
      interval: moment.duration(1, 'hour'), // Default interval
      intervalOpenSearchUnit: 'h',
      intervalOpenSearchValue: 1,
      min: moment(values[0]?.x),
      max: moment(values[values.length - 1]?.x),
    }
  };

  return chartData;
};

export const AlertingVisualGraph: React.FC<AlertingVisualGraphProps> = ({
  response,
  thresholdValue,
  values,
  services,
}) => {
  const chartData = useMemo(() => {
    const processed = processPPLResponseToChartData(response);
    console.log('AlertingVisualGraph - Response:', response);
    console.log('AlertingVisualGraph - Processed chart data:', processed);
    return processed;
  }, [response]);

  const timefilterUpdateHandler = useCallback((ranges: { from: number; to: number }) => {
    // Handle time filter updates if needed
    console.log('Time filter update:', ranges);
  }, []);

  // Create fallback mock data if no real data
  const mockData = useMemo(() => {
    const now = Date.now();
    const hourMs = 60 * 60 * 1000;
    return Array.from({ length: 24 }, (_, i) => ({
      x: now - (23 - i) * hourMs,
      y: Math.floor(Math.random() * 100) + 10,
    }));
  }, []);

  const dataToUse = chartData?.values?.length > 0 ? chartData.values : mockData;
  const hasRealData = chartData?.values?.length > 0;

  // Validate and clean data
  const data = dataToUse.filter(item => 
    item && 
    typeof item.x === 'number' && 
    typeof item.y === 'number' && 
    !isNaN(item.x) && 
    !isNaN(item.y) &&
    isFinite(item.x) &&
    isFinite(item.y)
  );

  // Ensure we have valid x values
  const xValues = data.map(d => d.x).filter(x => x != null && !isNaN(x));
  
  // Calculate X domain (time values)
  const xDomain = {
    min: Math.min(...xValues),
    max: Math.max(...xValues),
  };

  // Calculate Y domain - scale to accommodate threshold value
  const yValues = data.map(d => d.y).filter(y => y != null && !isNaN(y));
  const dataMax = Math.max(...yValues);
  let yMax = dataMax;
  
  // If threshold is provided, scale Y-axis to accommodate it
  if (thresholdValue && typeof thresholdValue === 'number' && !isNaN(thresholdValue)) {
    yMax = Math.max(dataMax, thresholdValue);
  }
  
  // Add padding above max value
  const yPadding = Math.max(1, Math.ceil(yMax * 0.1));
  const yDomain = {
    min: 0, // Always start from 0
    max: yMax + yPadding,
  };


  // Create threshold line annotation if threshold value is provided
  const lineAnnotationData = thresholdValue && typeof thresholdValue === 'number' && !isNaN(thresholdValue) ? [
    {
      dataValue: thresholdValue,
      details: `Threshold: ${thresholdValue.toLocaleString()}`,
    }
  ] : [];

  console.log('AlertingVisualGraph - Using data:', dataToUse);
  console.log('AlertingVisualGraph - Has real data:', hasRealData);
  console.log('AlertingVisualGraph - Cleaned data:', data);
  console.log('AlertingVisualGraph - Data length:', data.length);
  console.log('AlertingVisualGraph - X domain:', xDomain);
  console.log('AlertingVisualGraph - Y domain:', yDomain);
  console.log('AlertingVisualGraph - Threshold value:', thresholdValue);
  console.log('AlertingVisualGraph - Line annotation data:', lineAnnotationData);

  if (data.length === 0) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '450px' }}>
        <EuiText>No valid data points found.</EuiText>
      </div>
    );
  }

  if (xValues.length === 0) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '160px' }}>
        <EuiText>No valid time data found.</EuiText>
      </div>
    );
  }

  const lineAnnotationStyle = {
    line: {
      stroke: '#e74c3c',
      strokeWidth: 2,
      opacity: 0.8,
      dash: [5, 5],
    },
  };

  // Format functions like Discover
  const formatXValue = (val: string | number) => {
    if (typeof val === 'number') {
      return moment(val).format('HH:mm:ss');
    }
    return moment(val).format('HH:mm:ss');
  };

  const formatYValue = (value: number) => {
    if (typeof value !== 'number' || isNaN(value)) return '0';
    return value.toLocaleString();
  };

  // Minimal theme to avoid axis errors
  const chartsTheme = {
    background: { color: 'transparent' },
  };

  return (
    <EuiFlexGroup
      direction="column"
      gutterSize="none"
      className="alertingChart__wrapper alertingChart__wrapper--enhancement"
      data-test-subj="alertingChartWrapper"
    >
      <EuiFlexItem grow={false}>
        <EuiText size="s" style={{ padding: '10px' }}>
          <strong>Results{!hasRealData ? ' (Sample Data)' : ''}</strong>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <section
          aria-label="Histogram of found documents"
          className="alertingTimechart"
          data-test-subj="alertingTimechart"
        >
          <div className="alertingHistogram" data-test-subj="alertingChart" style={{ height: '160px' }}>
            <Chart size="100%">
              <Settings
                xDomain={xDomain}
                yDomain={yDomain}
                tooltip={{
                  type: TooltipType.VerticalCursor,
                }}
                theme={chartsTheme}
              />
              <Axis
                id="alerting-histogram-left-axis"
                position={Position.Left}
                title="Count"
                tickFormat={formatYValue}
              />
              <Axis
                id="alerting-histogram-bottom-axis"
                position={Position.Bottom}
                title="Time"
                tickFormat={formatXValue}
              />
              {thresholdValue && lineAnnotationData.length > 0 && (
                <LineAnnotation
                  id="threshold-line"
                  domainType={AnnotationDomainType.YDomain}
                  dataValues={lineAnnotationData}
                  hideTooltips={false}
                  style={lineAnnotationStyle}
                />
              )}
              <HistogramBarSeries
                id="alerting-histogram"
                minBarHeight={2}
                xScaleType={ScaleType.Time}
                yScaleType={ScaleType.Linear}
                xAccessor="x"
                yAccessors={['y']}
                data={data}
                name="Count"
              />
            </Chart>
          </div>
        </section>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
