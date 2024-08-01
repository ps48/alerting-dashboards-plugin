import React from 'react';
import { getApplication, getNavigationUI, getUISettings } from '../../../../services';

import { EuiFlexItem, EuiSmallButton } from '@elastic/eui';
import { PLUGIN_NAME } from '../../../../../utils/constants';
import { APP_PATH } from '../../../../utils/constants';

export default function NewMonitorAction() {
  const { HeaderControl } = getNavigationUI();
  const { setAppLeftControls } = getApplication();
  const uiSettings = getUISettings();
  const showActionsInHeader = uiSettings.get('home:useNewHomePage');

  return showActionsInHeader ? (
    <HeaderControl
      setMountPoint={setAppLeftControls}
      controls={[
        {
          id: 'Create monitor',
          label: 'Create monitor',
          iconType: 'plus',
          fill: true,
          href: `${PLUGIN_NAME}#${APP_PATH.CREATE_MONITOR}`,
          testId: 'createButton',
        },
      ]}
    />
  ) : (
    <EuiFlexItem grow={false}>
      <EuiSmallButton
        fill
        href={`${PLUGIN_NAME}#${APP_PATH.CREATE_MONITOR}`}
        data-test-subj="createButton"
      >
        Create monitor
      </EuiSmallButton>
    </EuiFlexItem>
  );
}
