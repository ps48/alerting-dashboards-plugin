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
  EuiPanel,
  EuiInMemoryTable,
  EuiCodeBlock,
  EuiHorizontalRule,
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
  
  useEffect(() => {
    const lowerSearch = search.trim().toLowerCase();
  
    if (!lowerSearch) {
      setFilteredRules(rulesData);
      return;
    }
  
    const filtered = rulesData.map((group) => {
      const filteredRules = group.rules.filter(
        (rule) =>
          rule.name.toLowerCase().includes(lowerSearch) ||
          rule.annotations?.summary?.toLowerCase().includes(lowerSearch)
      );
      return { ...group, rules: filteredRules };
    }).filter(group => group.rules.length > 0);
  
    setFilteredRules(filtered);
  }, [search, rulesData]);

  const fetchRules = async () => {
    try {
      const query = {};
      if (ruleTypeFilter) query.type = ruleTypeFilter;
      if (ruleGroupFilter) query["rule_group[]"] = ruleGroupFilter;
      if (severityFilter) query["match[]"] = `severity=\"${severityFilter}\"`;
      const dataConnectionId = "prometheus_2";
      const response = await httpClient.get(
        `/api/enhancements/prometheus/${dataConnectionId}/resources/rules`,
        { query }
      );

      const { data } = response;
      if (data?.groups) {
        const ruleNames = new Set();
        const dedupedGroups = data.groups.map((group) => {
          const rules = group.rules.filter((rule) => {
            const uniqueKey = `${group.name}::${rule.name}`;
            if (ruleNames.has(uniqueKey)) return false;
            ruleNames.add(uniqueKey);
            return true;
          });
          return { ...group, rules };
        });
        setRulesData(dedupedGroups);
        setFilteredRules(dedupedGroups);
      }
    } catch (error) {
      console.error("Error fetching rules:", error);
    }
  };

  const toggleDetails = (groupName, ruleName, rule) => {
    const key = `${groupName}::${ruleName}`;
    setExpandedRowMap((prev) => ({
      ...prev,
      [key]: prev[key] ? undefined : getExpandedRowContent(rule),
    }));
  };

  const getExpandedRowContent = (rule) => (
    <div style={{ padding: "1rem", backgroundColor: "#fff" }}>
      <EuiText><h4>Query</h4></EuiText>
      <EuiCodeBlock language="sql" fontSize="s" paddingSize="s" isCopyable>{rule.query || "N/A"}</EuiCodeBlock>

      <EuiSpacer size="s" />
      <EuiText><h4>Duration</h4></EuiText>
      <p>{rule.duration ? `${rule.duration} seconds` : "N/A"}</p>

      <EuiSpacer size="s" />
      <EuiText><h4>Annotations</h4></EuiText>
      {rule.annotations ? (
        <EuiFlexGroup wrap gutterSize="xs">
          {Object.entries(rule.annotations).map(([key, value]) => (
            <EuiFlexItem grow={false} key={key}>
              <EuiBadge color="hollow">{key}: {value}</EuiBadge>
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
      ) : (
        <p>N/A</p>
      )}
    </div>
  );

  const getStateDisplay = (rule) => {
    if (rule.type === "recording") {
      return <EuiHealth color="subdued">Recording rule</EuiHealth>;
    }
    const state = rule.state || "normal";
    const colorMap = {
      normal: "success",
      firing: "danger",
      pending: "warning",
      inactive: "subdued",
    };
    return <EuiBadge color={colorMap[state] || "hollow"}>{state.charAt(0).toUpperCase() + state.slice(1)}</EuiBadge>;
  };

  const getColumns = (groupName) => [
    {
      width: "40px",
      isExpander: true,
      render: (rule) => {
        const key = `${groupName}::${rule.name}`;
        return (
          <EuiButtonIcon
            onClick={() => toggleDetails(groupName, rule.name, rule)}
            aria-label={expandedRowMap[key] ? "Collapse" : "Expand"}
            iconType={expandedRowMap[key] ? "arrowUp" : "arrowDown"}
          />
        );
      },
    },
    {
      name: "State",
      render: getStateDisplay,
    },
    {
      field: "name",
      name: "Rule Name",
      render: (name) => name,
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
      name: "Active Alerts",
      render: (rule) => rule.alerts?.length || "0",
    },
  ];

  return (
    <EuiPanel>
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
        {/* <EuiFlexItem>
          <EuiSelect
            options={[
              { value: "", text: "All Severities" },
              { value: "critical", text: "Critical" },
              { value: "warning", text: "Warning" },
            ]}
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
          />
        </EuiFlexItem> */}
      </EuiFlexGroup>

      <EuiSpacer size="m" />

      {filteredRules.map((group, index) => {
        const expandedMap = Object.fromEntries(
          group.rules.map((rule) => {
            const key = `${group.name}::${rule.name}`;
            return expandedRowMap[key] ? [key, getExpandedRowContent(rule)] : null;
          }).filter(Boolean)
        );

        return (
          <EuiAccordion
            key={`group-${index}`}
            id={`group-${index}`}
            buttonContent={
              <EuiFlexGroup alignItems="center" justifyContent="spaceBetween" style={{ padding: '12px' }}>
                <EuiFlexItem grow={false}>
                  <EuiText size="s"><strong>Group: {group.name} ({group.rules.length} rules)</strong></EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            }
            initialIsOpen
          >
            <EuiInMemoryTable
              items={group.rules}
              columns={getColumns(group.name)}
              itemId={(item) => `${group.name}::${item.name}`}
              itemIdToExpandedRowMap={expandedMap}
              pagination={{ initialPageSize: 10, pageSizeOptions: [10, 20, 50, 100] }}
            />
            <EuiSpacer size="m" />
            <EuiHorizontalRule margin="none" />
          </EuiAccordion>
        );
      })}
    </EuiPanel>
  );
};

export default PrometheusRulesDashboard;
