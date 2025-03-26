/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  EuiAccordion,
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
  EuiInMemoryTable,
  EuiHorizontalRule,
} from "@elastic/eui";

const PrometheusDashboard = ({ httpClient, dataConnectionId }) => {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");
  const [groupFilter, setGroupFilter] = useState("");
  const [groupData, setGroupData] = useState([]);
  const [itemIdToExpandedRowMap, setItemIdToExpandedRowMap] = useState({});
  const [sortConfig, setSortConfig] = useState({
    field: 'state',
    direction: 'asc',
  });

  const getGroupKey = (labels) => {
    if (!labels || typeof labels !== 'object') return 'UnnamedGroup';
    const parts = Object.entries(labels)
      .map(([_, value]) => `${value}`)
      .join(' / ');
    return parts || 'UnnamedGroup';
  };

  const formatRelativeTime = (timeStr) => {
    if (!timeStr) return "-";
    const start = new Date(timeStr).getTime();
    const now = Date.now();
    const diffMs = now - start;
    if (diffMs < 0) return "Not started";
    let diffMinutes = Math.floor(diffMs / 60000);
    const days = Math.floor(diffMinutes / (60 * 24));
    diffMinutes %= 60 * 24;
    const hours = Math.floor(diffMinutes / 60);
    const mins = diffMinutes % 60;
    return days > 0 ? `${days}d ${hours}h ${mins}m` : hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getStateColor = (state) => {
    switch (state?.toLowerCase()) {
      case "active": return "danger";
      case "silenced": return "subdued";
      case "inhibited": return "warning";
      case "unprocessed": return "primary";
      default: return "hollow";
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case "firing":
      case "critical": return "danger";
      case "warning": return "warning";
      case "info":
      case "none": return "primary";
      default: return "subdued";
    }
  };

  const fetchAlertData = async () => {
    let active = true, silenced = true, inhibited = true, unprocessed = true;
    if (stateFilter) {
      active = stateFilter === "active";
      silenced = stateFilter === "silenced";
      inhibited = stateFilter === "inhibited";
      unprocessed = stateFilter === "unprocessed";
    }
    const filterArr = [];
    if (search) filterArr.push(search);
    if (severityFilter) filterArr.push(`severity=${severityFilter}`);
    if (groupFilter) filterArr.push(`alertname=${groupFilter}`);
    const dataConnectionId = "prometheus_k8s_cluster";
    try {
      const response = await httpClient.get(
        `/api/enhancements/prometheus/${dataConnectionId}/resources/alert_manager_alert_groups`,
        {
          query: {
            active,
            silenced,
            inhibited,
            unprocessed,
            filter: filterArr,
          },
        }
      );
      setGroupData(response.data);
    } catch (error) {
      console.error("Error fetching alert data:", error);
    }
  };

  useEffect(() => {
    fetchAlertData();
  }, [search, stateFilter, severityFilter, groupFilter, dataConnectionId, httpClient]);

  const toggleDetails = (alert) => {
    const { fingerprint } = alert;
    setItemIdToExpandedRowMap((prev) => {
      const newMap = { ...prev };
      if (newMap[fingerprint]) delete newMap[fingerprint];
      else newMap[fingerprint] = getExpandedRowContent(alert);
      return newMap;
    });
  };

  const getExpandedRowContent = (alert) => {
    const labelKeys = alert.labels ? Object.keys(alert.labels) : [];
    return (
      <div style={{ padding: "1rem", backgroundColor: "#fff" }}>
        <EuiTitle size="s"><h3>Alert details</h3></EuiTitle>
        <EuiSpacer size="m" />
        <EuiDescriptionList type="column" compressed>
          <EuiDescriptionListTitle>Name</EuiDescriptionListTitle>
          <EuiDescriptionListDescription>{alert.labels?.alertname || alert.labels?.rule || "N/A"}</EuiDescriptionListDescription>
          <EuiDescriptionListTitle>Health</EuiDescriptionListTitle>
          <EuiDescriptionListDescription>
            <EuiHealth color={getStateColor(alert.status?.state)}>{alert.status?.state || "N/A"}</EuiHealth>
          </EuiDescriptionListDescription>
          <EuiDescriptionListTitle>Summary</EuiDescriptionListTitle>
          <EuiDescriptionListDescription>{alert.annotations?.summary || alert.annotations?.description || "N/A"}</EuiDescriptionListDescription>
        </EuiDescriptionList>
        <EuiSpacer size="m" />
        <EuiTitle size="xs"><h4>Labels</h4></EuiTitle>
        <EuiSpacer size="s" />
        {labelKeys.length === 0 ? <p>No labels</p> : (
          <EuiFlexGroup wrap gutterSize="xs">
            {labelKeys.map((key) => (
              <EuiBadge key={key} color="hollow">{key}: {alert.labels[key]}</EuiBadge>
            ))}
          </EuiFlexGroup>
        )}
        <EuiSpacer size="m" />
        <EuiTitle size="xs"><h4>Description</h4></EuiTitle>
        <EuiSpacer size="s" />
        <p>{alert.annotations?.description || "N/A"}</p>
      </div>
    );
  };

  const columns = [
    {
      align: "left",
      width: "40px",
      isExpander: true,
      render: (alert) => (
        <EuiButtonIcon
          onClick={() => toggleDetails(alert)}
          aria-label={itemIdToExpandedRowMap[alert.fingerprint] ? "Collapse" : "Expand"}
          iconType={itemIdToExpandedRowMap[alert.fingerprint] ? "arrowUp" : "arrowDown"}
        />
      ),
    },
    {
      field: "status",
      name: "State",
      render: (status) => <EuiHealth color={getStateColor(status?.state)}>{status?.state || "Unknown"}</EuiHealth>,
      sortable: true,
    },
    {
      field: "startsAt",
      name: "Time",
      render: (startsAt) => formatRelativeTime(startsAt),
      sortable: true,
    },
    {
      name: "Name",
      render: (alert) => alert.labels?.rule || alert.labels?.alertname || "N/A",
    },
    {
      field: "labels.severity",
      name: "Severity",
      render: (severity) => <EuiBadge color={getSeverityColor(severity)}>{severity || "N/A"}</EuiBadge>,
      sortable: true,
    },
    {
      name: "Summary",
      render: (alert) => alert.annotations?.summary || alert.annotations?.description || "N/A",
    },
    {
      name: "Notification Channels",
      render: (alert) => alert.receivers?.[0]?.name || alert.__groupReceiverName || "N/A",
    },
    {
      name: "Actions",
      actions: [
        {
          name: "View",
          description: "View alert details",
          icon: "eye",
          type: "icon",
          onClick: (alert) => toggleDetails(alert),
        },
      ],
    },
  ];

  const groupOptions = [
    { value: "", text: "All Groups" },
    ...groupData.map((group) => {
      const key = getGroupKey(group.labels);
      return { value: key, text: key };
    }),
  ];

  return (
    <EuiPanel>
      <EuiFlexGroup>
        <EuiFlexItem grow={3}>
          <EuiFieldSearch placeholder="Search (annotations, labels, time, URL, receivers)" value={search} onChange={(e) => setSearch(e.target.value)} />
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiSelect options={stateOptions} value={stateFilter} onChange={(e) => setStateFilter(e.target.value)} />
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiSelect options={severityOptions} value={severityFilter} onChange={(e) => setSeverityFilter(e.target.value)} />
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiSelect options={groupOptions} value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)} />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="m" />

      {groupData.map((group, index) => {
        const groupKey = getGroupKey(group.labels);
        if (groupFilter && groupKey !== groupFilter) return null;
        const items = group.alerts.map((alert) => ({
          ...alert,
          __groupReceiverName: group.receiver?.name || "",
        }));

        const activeCount = items.filter(a => a.status?.state === "active").length;

        const expandedRowMap = Object.fromEntries(
          items.map((a) => itemIdToExpandedRowMap[a.fingerprint] ? [a.fingerprint, itemIdToExpandedRowMap[a.fingerprint]] : null).filter(Boolean)
        );

        return (
          <EuiAccordion
            key={`group-${index}`}
            id={`group-${index}`}
            buttonContent={
              <EuiFlexGroup
                alignItems="center"
                justifyContent="spaceBetween"
                gutterSize="s"
                style={{ padding: '12px' }}
                direction="row"
              >
                <EuiFlexItem grow={3}>
                  <EuiText size="s"><strong>Grouped by: {groupKey} {`(${items.length})`}</strong></EuiText>
                </EuiFlexItem>
                <EuiFlexItem grow={1}>
                  <EuiFlexGroup gutterSize="xs" direction="row" alignItems="center" responsive={false}>
                    <EuiFlexItem grow={false}>
                      <EuiBadge>{items.length} alerts</EuiBadge>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="danger">{activeCount} active</EuiBadge>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
              </EuiFlexGroup>
            }
            initialIsOpen
          >
            <EuiInMemoryTable
              items={items}
              columns={columns}
              itemId="fingerprint"
              itemIdToExpandedRowMap={expandedRowMap}
              pagination={{ initialPageSize: 10, pageSizeOptions: [10, 20, 50, 100] }}
              sorting={{
                sort: sortConfig,
                onSort: (newSort) => setSortConfig(newSort),
              }}
            />
            <EuiSpacer size="m" />
            <EuiHorizontalRule margin="none" />
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
