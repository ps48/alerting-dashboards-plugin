/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  EuiAccordion,
  EuiBasicTable,
  EuiBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiFieldSearch,
  EuiSelect,
  EuiPanel,
} from "@elastic/eui";

const PrometheusDashboard = (props) => {
  const { httpClient } = props;
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");
  const [alerts] = useState(sampleData);

  // Filter alerts based on search term in all columns (excluding state and severity)
  // and also using state and severity selectors.
  const filteredAlerts = alerts.filter((alert) => {
    const lowerSearch = search.toLowerCase();
    const searchMatch =
      !search ||
      alert.job.toLowerCase().includes(lowerSearch) ||
      alert.rule.toLowerCase().includes(lowerSearch) ||
      alert.summary.toLowerCase().includes(lowerSearch) ||
      alert.time.toLowerCase().includes(lowerSearch) ||
      alert.notificationChannels.join(", ").toLowerCase().includes(lowerSearch);
    const stateMatch = !stateFilter || alert.state === stateFilter;
    const severityMatch = !severityFilter || alert.severity === severityFilter;
    return searchMatch && stateMatch && severityMatch;
  });

  const jobGroups = groupBy(filteredAlerts, "job");

  const columns = [
    {
      field: "state",
      name: "State",
      render: (state) => <EuiHealth color={getStateColor(state)}>{state}</EuiHealth>,
    },
    {
      field: "time",
      name: "Time",
    },
    {
      field: "rule",
      name: "Rule",
      render: (rule) => <a href="#">{rule}</a>,
    },
    {
      field: "severity",
      name: "Severity",
      render: (severity) => <EuiBadge color={getSeverityColor(severity)}>{severity}</EuiBadge>,
    },
    {
      field: "summary",
      name: "Summary",
    },
    {
      field: "notificationChannels",
      name: "Notification Channels",
      render: (channels) => channels.join(", "),
    },
    {
      name: "Actions",
      actions: [
        {
          name: "View",
          icon: "eye",
          type: "icon",
          onClick: (item) => console.log("View alert", item),
        },
      ],
    },
  ];

  return (
    <EuiPanel>
      <EuiFlexGroup>
        <EuiFlexItem grow={3}>
          <EuiFieldSearch
            placeholder="Search (job, rule, summary, time, channels)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiSelect
            options={stateOptions}
            aria-label="State Filter"
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiSelect
            options={severityOptions}
            aria-label="Severity Filter"
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      {Object.keys(jobGroups).map((job) => (
        <EuiAccordion id={job} key={job} buttonContent={`Job: ${job}`} initialIsOpen>
          <EuiBasicTable items={jobGroups[job]} columns={columns} />
        </EuiAccordion>
      ))}
    </EuiPanel>
  );
};

const getStateColor = (state) => {
  switch (state) {
    case "Active":
      return "danger";
    case "Silenced":
      return "subdued";
    case "Inhibited":
      return "warning";
    case "Unprocessed":
      return "primary";
    default:
      return "hollow";
  }
};

const getSeverityColor = (severity) => {
  switch (severity) {
    case "Critical":
      return "danger";
    case "Warning":
      return "warning";
    case "Info":
      return "primary";
    default:
      return "subdued";
  }
};

const sampleData = [
  {
    job: "integrations/node_exporter",
    state: "Active",
    time: "2h 25m",
    rule: "DatasourceNoData",
    severity: "Critical",
    summary: "Pod has been in a non-ready state for more than 15 min.",
    notificationChannels: ["WebhookToNodeRed", "default-sns"],
  },
  {
    job: "integrations/node_exporter",
    state: "Active",
    time: "1d 20h 5m",
    rule: "cpu testing",
    severity: "Warning",
    summary: "Deployment hasn't matched the expected number of replicas.",
    notificationChannels: ["default-sns"],
  },
  {
    job: "integrations/node_exporter",
    state: "Silenced",
    time: "-",
    rule: "-",
    severity: "Info",
    summary: "-",
    notificationChannels: ["-"],
  },
];

const groupBy = (array, key) =>
  array.reduce((result, currentItem) => {
    (result[currentItem[key]] = result[currentItem[key]] || []).push(currentItem);
    return result;
  }, {});

const stateOptions = [
  { value: "", text: "All States" },
  { value: "Active", text: "Active" },
  { value: "Silenced", text: "Silenced" },
  { value: "Inhibited", text: "Inhibited" },
  { value: "Unprocessed", text: "Unprocessed" },
];

const severityOptions = [
  { value: "", text: "All Severities" },
  { value: "Critical", text: "Critical" },
  { value: "Warning", text: "Warning" },
  { value: "Info", text: "Info" },
];

export default PrometheusDashboard;
