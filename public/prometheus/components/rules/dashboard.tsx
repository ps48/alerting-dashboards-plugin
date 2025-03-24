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
} from "@elastic/eui";

const PrometheusRulesDashboard = ({ httpClient, dataConnectionId }) => {
  const [rulesData, setRulesData] = useState([]);
  const [filteredRules, setFilteredRules] = useState([]);
  const [search, setSearch] = useState("");
  const [ruleTypeFilter, setRuleTypeFilter] = useState("");
  const [ruleGroupFilter, setRuleGroupFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");
  const [expandedRowMap, setExpandedRowMap] = useState({});

  useEffect(() => {
    fetchRules();
  }, [ruleTypeFilter, ruleGroupFilter, severityFilter]);

  const fetchRules = async () => {
    try {
      const params = new URLSearchParams();
      if (ruleTypeFilter) params.append("type", ruleTypeFilter);
      if (ruleGroupFilter) params.append("rule_group[]", ruleGroupFilter);
      if (severityFilter) params.append("match[]", `severity="${severityFilter}"`);
      const dataConnectionId = "prometheus_k8s_cluster";
      const response = await httpClient.get(
        `/api/enhancements/prometheus/${dataConnectionId}/resources/rules?${params.toString()}`
      );
      const { data } = response;
      if (data && data.groups) {
        setRulesData(data.groups);
        setFilteredRules(data.groups);
      }
    } catch (error) {
      console.error("Error fetching rules:", error);
    }
  };

  const toggleDetails = (ruleName) => {
    setExpandedRowMap((prev) => ({
      ...prev,
      [ruleName]: prev[ruleName] ? null : getExpandedRowContent(ruleName),
    }));
  };

  const getExpandedRowContent = (rule) => (
    <EuiText style={{ backgroundColor: "#fff", padding: "10px" }}>
      <EuiSpacer size="s" />
      <h4>Query</h4>
      <p>{rule.query || "N/A"}</p>

      <EuiSpacer size="s" />
      <h4>Duration</h4>
      <p>{rule.duration ? `${rule.duration} seconds` : "N/A"}</p>

      <EuiSpacer size="s" />
      <h4>Annotations</h4>
      {rule.annotations ? (
        Object.entries(rule.annotations).map(([key, value]) => (
          <EuiBadge key={key} color="hollow">
            {key}: {value}
          </EuiBadge>
        ))
      ) : (
        <p>N/A</p>
      )}
    </EuiText>
  );

  const columns = [
    {
      width: "40px",
      isExpander: true,
      render: (rule) => (
        <EuiButtonIcon
          onClick={() => toggleDetails(rule.name)}
          aria-label={expandedRowMap[rule.name] ? "Collapse" : "Expand"}
          iconType={expandedRowMap[rule.name] ? "arrowUp" : "arrowDown"}
        />
      ),
    },
    {
      field: "state",
      name: "State",
      render: (state) => (
        <EuiHealth color={state === "inactive" ? "subdued" : "primary"}>
          {state || "Unknown"}
        </EuiHealth>
      ),
    },
    {
      field: "name",
      name: "Rule Name",
      render: (name) => <strong>{name}</strong>,
    },
    {
      field: "labels.severity",
      name: "Severity",
      render: (severity) => (
        <EuiBadge color={severity === "critical" ? "danger" : severity === "warning" ? "warning" : "hollow"}>
          {severity || "N/A"}
        </EuiBadge>
      ),
    },
    {
      field: "annotations.summary",
      name: "Summary",
      render: (summary) => summary || "N/A",
    },
    {
      field: "alerts.length",
      name: "Active Alerts",
      render: (alerts) => alerts?.length || "0",
    },
  ];

  return (
    <div>
      {/* Filters */}
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFieldSearch
            placeholder="Search rules..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiSelect
            options={[
              { value: "", text: "All Types" },
              { value: "alert", text: "Alerting Rules" },
              { value: "record", text: "Recording Rules" },
            ]}
            value={ruleTypeFilter}
            onChange={(e) => setRuleTypeFilter(e.target.value)}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiSelect
            options={[
              { value: "", text: "All Groups" },
              ...rulesData.map((group) => ({
                value: group.name,
                text: group.name,
              })),
            ]}
            value={ruleGroupFilter}
            onChange={(e) => setRuleGroupFilter(e.target.value)}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiSelect
            options={[
              { value: "", text: "All Severities" },
              { value: "critical", text: "Critical" },
              { value: "warning", text: "Warning" },
            ]}
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
          />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="m" />

      {/* Rule Groups as Accordions */}
      {filteredRules.map((group, index) => (
        <EuiAccordion key={index} id={`group-${index}`} buttonContent={`Group: ${group.name} (${group.rules.length} rules)`} initialIsOpen>
          <EuiBasicTable
            items={group.rules}
            columns={columns}
            itemId="name"
            itemIdToExpandedRowMap={expandedRowMap}
          />
        </EuiAccordion>
      ))}
    </div>
  );
};

export default PrometheusRulesDashboard;
