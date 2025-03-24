/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  EuiAccordion,
  EuiBasicTable,
  EuiBadge,
  EuiButtonIcon,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiSelect,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiPanel,
} from "@elastic/eui";

const PrometheusDashboard = ({ httpClient, dataConnectionId }) => {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");
  const [groupData, setGroupData] = useState([]);
  const [itemIdToExpandedRowMap, setItemIdToExpandedRowMap] = useState({});

  /* ---------------------------------------------
     Helpers / Utilities
  --------------------------------------------- */

  // Prefer the label "alertname"; otherwise, concatenate additionalProp1/2/3 with "/"
  const getGroupKey = (labels) => {
    if (labels.alertname) return labels.alertname;
    const prop1 = labels.additionalProp1 || "";
    const prop2 = labels.additionalProp2 || "";
    const prop3 = labels.additionalProp3 || "";
    const fallback = [prop1, prop2, prop3].filter(Boolean).join("/");
    return fallback || "UnnamedGroup";
  };

  // Format a time string as a relative duration
  const formatRelativeTime = (timeStr) => {
    if (!timeStr) return "-";
    const start = new Date(timeStr).getTime();
    const now = Date.now();
    const diffMs = now - start;
    if (diffMs < 0) return "Not started";
    let diffMinutes = Math.floor(diffMs / (1000 * 60));
    const days = Math.floor(diffMinutes / (60 * 24));
    diffMinutes %= 60 * 24;
    const hours = Math.floor(diffMinutes / 60);
    const mins = diffMinutes % 60;
    if (days > 0) return `${days}d ${hours}h ${mins}m`;
    else if (hours > 0) return `${hours}h ${mins}m`;
    else return `${mins}m`;
  };

  // Map alert state to a color for EuiHealth
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

  // Map severity to a color for EuiBadge
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

  // Fetch group data from the API
  const fetchAlertData = async () => {
    // Determine state booleans. If no state filter is selected, show all.
    let active = true,
      silenced = true,
      inhibited = true,
      unprocessed = true;
    if (stateFilter) {
      active = stateFilter === "active";
      silenced = stateFilter === "silenced";
      inhibited = stateFilter === "inhibited";
      unprocessed = stateFilter === "unprocessed";
    }
    // Build an array of filter matchers.
    const filterArr = [];
    if (search) {
      filterArr.push(search);
    }
    if (severityFilter) {
      filterArr.push(`severity=${severityFilter}`);
    }
    // Construct query parameters.
    const query = {
      active,
      silenced,
      inhibited,
      unprocessed,
      filter: filterArr,
      // Optionally, add a "receiver" parameter if needed.
    };

    const dataConnectionId = "prometheus_k8s_cluster";
    try {
      const response = await httpClient.get(
        `/api/enhancements/prometheus/${dataConnectionId}/resources/alert_manager_alert_groups`,
        { query }
      );
      // Assume response.data is an array of group objects.
      setGroupData(response.data);
    } catch (error) {
      console.error("Error fetching alert data:", error);
    }
  };

  // Trigger fetch whenever filters or dataConnectionId change.
  useEffect(() => {
    fetchAlertData();
  }, [search, stateFilter, severityFilter, dataConnectionId, httpClient]);

  // Toggle expansion for an alert row.
  const toggleDetails = (alert) => {
    const { fingerprint } = alert;
    const newMap = { ...itemIdToExpandedRowMap };
    if (newMap[fingerprint]) {
      delete newMap[fingerprint];
    } else {
      newMap[fingerprint] = getExpandedRowContent(alert);
    }
    setItemIdToExpandedRowMap(newMap);
  };

  // Expanded row content rendered as a plain div with white background.
  const getExpandedRowContent = (alert) => {
    const labelKeys = alert.labels ? Object.keys(alert.labels) : [];
    return (
      <div style={{ backgroundColor: "#fff", padding: "16px" }}>
        <EuiTitle size="s">
          <h3>Alert details</h3>
        </EuiTitle>
        <EuiSpacer size="m" />

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
            {alert.annotations?.summary ||
              alert.annotations?.description ||
              "N/A"}
          </EuiDescriptionListDescription>
        </EuiDescriptionList>

        <EuiSpacer size="m" />

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

        <EuiTitle size="xs">
          <h4>Description</h4>
        </EuiTitle>
        <EuiSpacer size="s" />
        <p>{alert.annotations?.description || "N/A"}</p>
      </div>
    );
  };

  // For additional client-side filtering (in case the API doesn't cover all cases)
  const filteredGroups = groupData
    .map((group) => {
      const filteredAlerts = group.alerts.filter((alert) => {
        const lowerSearch = search.toLowerCase();
        const searchMatch =
          !search ||
          (alert.annotations &&
            Object.values(alert.annotations)
              .join(" ")
              .toLowerCase()
              .includes(lowerSearch)) ||
          (alert.labels &&
            Object.values(alert.labels)
              .join(" ")
              .toLowerCase()
              .includes(lowerSearch)) ||
          (alert.startsAt &&
            alert.startsAt.toLowerCase().includes(lowerSearch)) ||
          (alert.endsAt && alert.endsAt.toLowerCase().includes(lowerSearch)) ||
          (alert.generatorURL &&
            alert.generatorURL.toLowerCase().includes(lowerSearch)) ||
          (alert.receivers &&
            alert.receivers
              .map((r) => r.name)
              .join(", ")
              .toLowerCase()
              .includes(lowerSearch));
        const stateMatch =
          !stateFilter ||
          (alert.status?.state &&
            alert.status.state.toLowerCase() === stateFilter.toLowerCase());
        const severityMatch =
          !severityFilter ||
          (alert.labels?.severity &&
            alert.labels.severity.toLowerCase() === severityFilter.toLowerCase());
        return searchMatch && stateMatch && severityMatch;
      });
      return { ...group, alerts: filteredAlerts };
    })
    .filter((group) => group.alerts.length > 0);

  // Table columns configuration.
  const columns = [
    {
      // Expand/collapse icon column.
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
        const rule = alert.labels?.rule || alert.labels?.alertname || "N/A";
        return <a href="#">{rule}</a>;
      },
    },
    {
      field: "labels.severity",
      name: "Severity",
      render: (severity) => (
        <EuiBadge color={getSeverityColor(severity)}>
          {severity || "N/A"}
        </EuiBadge>
      ),
    },
    {
      name: "Summary",
      render: (alert) =>
        alert.annotations?.summary ||
        alert.annotations?.description ||
        "N/A",
    },
    {
      name: "Notification Channels",
      render: (alert) => {
        // Show only ONE channel: first alert receiver if exists; otherwise, the group's receiver.
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
        // Inject the group's receiver name for use in the Notification Channels column.
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
