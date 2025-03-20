/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  EuiAccordion,
  EuiBasicTable,
  EuiBadge,
  EuiButtonIcon,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiPanel,
  EuiSelect,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
} from "@elastic/eui";
import { alertData } from "./temp_data";

/* Example: load your group data from somewhere */
const sampleGroupData = [...alertData];

/* ---------------------------------------------
   Helpers / Utilities
--------------------------------------------- */

// Prefer the label `alertname`; otherwise, concatenate additionalProp1/2/3 with "/".
const getGroupKey = (labels) => {
  if (labels.alertname) return labels.alertname;
  const prop1 = labels.additionalProp1 || "";
  const prop2 = labels.additionalProp2 || "";
  const prop3 = labels.additionalProp3 || "";
  const fallback = [prop1, prop2, prop3].filter(Boolean).join("/");
  return fallback || "UnnamedGroup";
};

// Format the time as a relative duration from now (e.g., '2h 25m', '1d 2h 5m').
const formatRelativeTime = (timeStr) => {
  if (!timeStr) return "-";
  const start = new Date(timeStr).getTime();
  const now = Date.now();
  const diffMs = now - start;

  if (diffMs < 0) {
    // startsAt is in the future
    return "Not started";
  }

  let diffMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(diffMinutes / (60 * 24));
  diffMinutes %= 60 * 24;
  const hours = Math.floor(diffMinutes / 60);
  const mins = diffMinutes % 60;

  if (days > 0) {
    return `${days}d ${hours}h ${mins}m`;
  } else if (hours > 0) {
    return `${hours}h ${mins}m`;
  } else {
    return `${mins}m`;
  }
};

// Map the alert status to a color for EuiHealth
const getStateColor = (state) => {
  if (!state) return "hollow";
  switch (state.toLowerCase()) {
    case "active":
      return "danger";
    case "silenced":
      return "subdued";
    case "inhibited":
      return "warning";
    case "unprocessed":
      return "primary";
    default:
      return "hollow";
  }
};

// Map the alert severity to a color for EuiBadge
const getSeverityColor = (severity) => {
  if (!severity) return "subdued";
  switch (severity.toLowerCase()) {
    case "firing":
    case "critical":
      return "danger";
    case "warning":
      return "warning";
    case "info":
    case "none":
      return "primary";
    default:
      return "subdued";
  }
};

/* ---------------------------------------------
   Main Component
--------------------------------------------- */

const PrometheusDashboard = () => {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");

  // Tracks which rows (alerts) are expanded
  const [itemIdToExpandedRowMap, setItemIdToExpandedRowMap] = useState({});

  // Expand/collapse a single alert row
  const toggleDetails = (alert) => {
    const { fingerprint } = alert;
    const newMap = { ...itemIdToExpandedRowMap };
    if (newMap[fingerprint]) {
      // Already expanded -> collapse
      delete newMap[fingerprint];
    } else {
      // Not expanded -> expand with content
      newMap[fingerprint] = getExpandedRowContent(alert);
    }
    setItemIdToExpandedRowMap(newMap);
  };

  // Content shown when a row is expanded
  // White background via style={{ backgroundColor: '#fff' }}
  const getExpandedRowContent = (alert) => {
    const labelKeys = alert.labels ? Object.keys(alert.labels) : [];

    return (
      <EuiPanel style={{ backgroundColor: "#fff" }} paddingSize="m">
        <EuiTitle size="s">
          <h3>Alert details</h3>
        </EuiTitle>
        <EuiSpacer size="m" />

        {/* Fields: Name, Health, Summary */}
        <EuiDescriptionList type="column" compressed>
          <EuiDescriptionListTitle>Name</EuiDescriptionListTitle>
          <EuiDescriptionListDescription>
            {alert.labels?.alertname || alert.labels?.rule || "N/A"}
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>Health</EuiDescriptionListTitle>
          <EuiDescriptionListDescription>
            <EuiHealth color={getStateColor(alert.status?.state)}>
              {alert.status?.state || "N/A"}
            </EuiHealth>
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>Summary</EuiDescriptionListTitle>
          <EuiDescriptionListDescription>
            {alert.annotations?.summary || alert.annotations?.description || "N/A"}
          </EuiDescriptionListDescription>
        </EuiDescriptionList>

        <EuiSpacer size="m" />

        {/* Labels */}
        <EuiTitle size="xs">
          <h4>Labels</h4>
        </EuiTitle>
        <EuiSpacer size="s" />
        {labelKeys.length === 0 ? (
          <p>No labels</p>
        ) : (
          <EuiFlexGroup wrap responsive={false} gutterSize="xs">
            {labelKeys.map((key) => (
              <EuiBadge key={key} color="hollow">
                {key}: {alert.labels[key]}
              </EuiBadge>
            ))}
          </EuiFlexGroup>
        )}

        <EuiSpacer size="m" />

        {/* Description */}
        <EuiTitle size="xs">
          <h4>Description</h4>
        </EuiTitle>
        <EuiSpacer size="s" />
        <p>{alert.annotations?.description || "N/A"}</p>
      </EuiPanel>
    );
  };

  // Filter each group's alerts based on search, state, severity
  const filteredGroups = sampleGroupData
    .map((group) => {
      const filteredAlerts = group.alerts.filter((alert) => {
        const lowerSearch = search.toLowerCase();

        // Search in annotations, labels, time fields, generatorURL, receivers
        const searchMatch =
          !search ||
          (alert.annotations &&
            Object.values(alert.annotations).join(" ").toLowerCase().includes(lowerSearch)) ||
          (alert.labels &&
            Object.values(alert.labels).join(" ").toLowerCase().includes(lowerSearch)) ||
          (alert.startsAt && alert.startsAt.toLowerCase().includes(lowerSearch)) ||
          (alert.endsAt && alert.endsAt.toLowerCase().includes(lowerSearch)) ||
          (alert.generatorURL && alert.generatorURL.toLowerCase().includes(lowerSearch)) ||
          (alert.receivers &&
            alert.receivers.map((r) => r.name).join(", ").toLowerCase().includes(lowerSearch));

        // State filter (alert.status.state)
        const stateMatch =
          !stateFilter ||
          (alert.status?.state &&
            alert.status.state.toLowerCase() === stateFilter.toLowerCase());

        // Severity filter (alert.labels.severity)
        const severityMatch =
          !severityFilter ||
          (alert.labels?.severity &&
            alert.labels.severity.toLowerCase() === severityFilter.toLowerCase());

        return searchMatch && stateMatch && severityMatch;
      });

      return { ...group, alerts: filteredAlerts };
    })
    .filter((group) => group.alerts.length > 0);

  // Table columns (State, Time, Rule, Severity, Summary, Notification Channels, Actions)
  const columns = [
    {
      // Expand/collapse icon
      align: "left",
      width: "40px",
      isExpander: true,
      render: (alert) => (
        <EuiButtonIcon
          onClick={() => toggleDetails(alert)}
          aria-label={
            itemIdToExpandedRowMap[alert.fingerprint] ? "Collapse" : "Expand"
          }
          iconType={
            itemIdToExpandedRowMap[alert.fingerprint] ? "arrowUp" : "arrowDown"
          }
        />
      ),
    },
    {
      field: "status",
      name: "State",
      render: (status) => (
        <EuiHealth color={getStateColor(status?.state)}>
          {status?.state || "Unknown"}
        </EuiHealth>
      ),
    },
    {
      name: "Time",
      render: (alert) => formatRelativeTime(alert.startsAt),
    },
    {
      name: "Rule",
      render: (alert) => {
        // If there's a label 'rule', show that; otherwise fallback to 'alertname'
        const rule = alert.labels?.rule || alert.labels?.alertname || "N/A";
        return <a href="#">{rule}</a>;
      },
    },
    {
      field: "labels.severity",
      name: "Severity",
      render: (severity) => (
        <EuiBadge color={getSeverityColor(severity)}>{severity || "N/A"}</EuiBadge>
      ),
    },
    {
      name: "Summary",
      render: (alert) =>
        alert.annotations?.summary || alert.annotations?.description || "N/A",
    },
    {
      name: "Notification Channels",
      render: (alert) => {
        // Only show ONE channel:
        // 1) The first alert receiver (if any)
        // 2) Otherwise the group's receiver
        // 3) Otherwise "N/A"
        const groupReceiver = alert.__groupReceiverName;
        const alertReceiver = alert.receivers?.[0]?.name;
        return alertReceiver || groupReceiver || "N/A";
      },
    },
    {
      name: "Actions",
      actions: [
        {
          name: "View",
          description: "View alert details",
          icon: "eye",
          type: "icon",
          onClick: (alert) => console.log("View alert:", alert),
        },
        {
          name: "Silence",
          description: "Silence this alert",
          icon: "minusInCircle",
          type: "icon",
          onClick: (alert) => console.log("Silence alert:", alert),
        },
      ],
    },
  ];

  return (
    <EuiPanel>
      {/* Filters */}
      <EuiFlexGroup>
        <EuiFlexItem grow={3}>
          <EuiFieldSearch
            placeholder="Search (annotations, labels, time, URL, receivers)"
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

      <EuiSpacer size="m" />

      {/* Render each group in its own accordion */}
      {filteredGroups.map((group, index) => {
        // For each alert in the group, inject the group's receiver name
        // so we can show it in the Notification Channels column (if needed)
        const items = group.alerts.map((alert) => ({
          ...alert,
          __groupReceiverName: group.receiver?.name || "",
        }));

        return (
          <EuiAccordion
            key={`group-${index}`}
            id={`group-${index}`}
            buttonContent={`Group: ${getGroupKey(group.labels)} (${items.length} alerts)`}
            initialIsOpen
          >
            <EuiBasicTable
              items={items}
              columns={columns}
              itemId="fingerprint"
              itemIdToExpandedRowMap={itemIdToExpandedRowMap}
            />
          </EuiAccordion>
        );
      })}
    </EuiPanel>
  );
};

/* ---------------------------------------------
   Example Filter Options
--------------------------------------------- */

const stateOptions = [
  { value: "", text: "All States" },
  { value: "active", text: "Active" },
  { value: "silenced", text: "Silenced" },
  { value: "inhibited", text: "Inhibited" },
  { value: "unprocessed", text: "Unprocessed" },
];

const severityOptions = [
  { value: "", text: "All Severities" },
  { value: "Critical", text: "Critical" },
  { value: "Warning", text: "Warning" },
  { value: "Info", text: "Info" },
  { value: "None", text: "None" },
];

export default PrometheusDashboard;
