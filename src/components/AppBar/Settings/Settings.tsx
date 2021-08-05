import React, { Fragment } from 'react';

import { Callout, IconButton, Text, Toggle } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';

import useSettingsStyles from './Settings.styles';
import { SET_APP_THEME } from '../../../redux/appTheme/appTheme.types';

import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

const Settings: React.FC = () => {
  const classes = useSettingsStyles();
  const appDispatch = useAppDispatch();
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
  const labelId = useId('callout-label');
  const descriptionId = useId('callout-description');
  const {
    appTheme: { isDarkMode },
  } = useAppSelector((state) => state);

  return (
    <Fragment>
      <IconButton
        id="settingsButton"
        iconProps={{ iconName: 'Settings' }}
        title="Settings"
        ariaLabel="Settings"
        onClick={toggleIsCalloutVisible}
      />
      {isCalloutVisible && (
        <Callout
          className={classes.callout}
          ariaLabelledBy={labelId}
          ariaDescribedBy={descriptionId}
          role="alertdialog"
          gapSpace={0}
          target="#settingsButton"
          onDismiss={toggleIsCalloutVisible}
          setInitialFocus
        >
          <Text variant="xLarge">Settings</Text>
          <Toggle
            id="theme-toggle"
            label="Toggle View Mode"
            onText="Dark Mode"
            offText="Light Mode"
            defaultChecked={isDarkMode}
            onChange={() => appDispatch({ type: SET_APP_THEME, payload: !isDarkMode })}
          />
        </Callout>
      )}
    </Fragment>
  );
};

export default Settings;
