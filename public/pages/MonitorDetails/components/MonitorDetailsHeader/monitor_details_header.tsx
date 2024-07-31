/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EuiFlexGroup, EuiFlexItem, EuiHealth, EuiSmallButton, EuiText } from '@elastic/eui';
import React from 'react';
import { getApplication, getNavigationUI, getUISettings } from '../../../../services';

interface MonitorDetailsHeaderProps {
  monitor: any;
  updating: boolean;
  editMonitor: () => void;
  updateMonitor: (update: any, actionKeywords?: string[]) => any;
  showJsonModal: () => void;
  onDeleteClick: () => void;
}
export const MonitorDetailsHeader = ({
  monitor,
  updating,
  editMonitor,
  updateMonitor,
  showJsonModal,
  onDeleteClick,
}: MonitorDetailsHeaderProps) => {
  const { HeaderControls } = getNavigationUI();
  const { setAppLeftControls } = getApplication();
  const uiSettings = getUISettings();
  const showActionsInHeader = uiSettings.get('home:useNewHomePage');
  return showActionsInHeader ? (
    <>
      <HeaderControls
        setMountPoint={setAppLeftControls}
        controls={[
          {
            id: '',
            label: '',
            iconType: 'trash',
            testId: 'deleteButton',
            color: 'danger',
            run: onDeleteClick,
          },
          {
            id: 'Update monitor',
            label: monitor.enabled ? 'Disable' : 'Enable',
            testId: 'updateButton',
            isLoading: updating,
            run: () => updateMonitor({ enabled: !monitor.enabled }),
          },
          {
            id: 'export monitor',
            label: 'Export as JSON',
            testId: 'exportButton',
            run: showJsonModal,
          },
          {
            id: 'Edit monitor',
            label: 'Edit',
            testId: 'editButton',
            run: editMonitor,
            fill: true,
          },
        ]}
      />
    </>
  ) : (
    <EuiFlexGroup alignItems="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiText size="s" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <h1>{monitor.name}</h1>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem style={{ paddingBottom: '5px', marginLeft: '0px' }}>
        {monitor.enabled ? (
          <EuiHealth color="success">Enabled</EuiHealth>
        ) : (
          <EuiHealth color="subdued">Disabled</EuiHealth>
        )}
      </EuiFlexItem>
      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiSmallButton onClick={editMonitor}>Edit</EuiSmallButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSmallButton
            isLoading={updating}
            onClick={() => updateMonitor({ enabled: !monitor.enabled })}
          >
            {monitor.enabled ? 'Disable' : 'Enable'}
          </EuiSmallButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSmallButton onClick={showJsonModal}>Export as JSON</EuiSmallButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSmallButton onClick={onDeleteClick} color="danger">
            Delete
          </EuiSmallButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiFlexGroup>
  );
};
