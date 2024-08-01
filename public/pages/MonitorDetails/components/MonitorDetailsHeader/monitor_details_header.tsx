/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiSmallButton,
  EuiText,
} from '@elastic/eui';
import React from 'react';
import { getApplication, getNavigationUI, getUISettings } from '../../../../services';

interface MonitorDetailsHeaderProps {
  monitor: any;
  updating: boolean;
  editMonitor: () => void;
  updateMonitor: (update: any, actionKeywords?: string[]) => any;
  showJsonModal: () => void;
  onDeleteClick: () => void;
  renderNoTriggersCallOut: () => React.JSX.Element;
}
export const MonitorDetailsHeader = ({
  monitor,
  updating,
  editMonitor,
  updateMonitor,
  showJsonModal,
  onDeleteClick,
  renderNoTriggersCallOut,
}: MonitorDetailsHeaderProps) => {
  const { HeaderControl } = getNavigationUI();
  const { setAppRightControls, setAppBadgeControls, setAppBottomControls } = getApplication();
  const uiSettings = getUISettings();
  const showActionsInHeader = uiSettings.get('home:useNewHomePage');
  return showActionsInHeader ? (
    <>
      <HeaderControl
        setMountPoint={setAppBadgeControls}
        controls={[
          {
            renderComponent: monitor.enabled ? (
              <EuiHealth color="success">Enabled</EuiHealth>
            ) : (
              <EuiHealth color="subdued">Disabled</EuiHealth>
            ),
          },
        ]}
      />
      <HeaderControl
        setMountPoint={setAppRightControls}
        controls={[
          {
            renderComponent: (
              <EuiButtonIcon
                onClick={onDeleteClick}
                color="danger"
                iconType="trash"
                display="base"
                size="s"
              >
                Delete
              </EuiButtonIcon>
            ),
          },
          {
            renderComponent: (
              <EuiSmallButton
                isLoading={updating}
                onClick={() => updateMonitor({ enabled: !monitor.enabled })}
              >
                {monitor.enabled ? 'Disable' : 'Enable'}
              </EuiSmallButton>
            ),
          },
          {
            renderComponent: (
              <EuiSmallButton onClick={showJsonModal}>Export as JSON</EuiSmallButton>
            ),
          },
          {
            renderComponent: (
              <EuiSmallButton onClick={editMonitor} fill>
                Edit
              </EuiSmallButton>
            ),
          },
        ]}
      />
      <HeaderControl
        setMountPoint={setAppBottomControls}
        controls={[
          {
            renderComponent: renderNoTriggersCallOut(),
          },
        ]}
      />
    </>
  ) : (
    <>
      {renderNoTriggersCallOut()}
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
    </>
  );
};
