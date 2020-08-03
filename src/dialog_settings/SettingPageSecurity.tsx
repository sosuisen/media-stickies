/**
 * @license Media Stickies
 * Copyright (c) Hidekazu Kubota
 *
 * This source code is licensed under the Mozilla Public License Version 2.0
 * found in the LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';
import './SettingPageSecurity.css';
import { cardColors, ColorName } from '../modules_common/color';
import {
  MessageContext,
  SettingsDialogContext,
  SettingsDialogProvider,
  SettingsDialogAction,
} from './StoreProvider';
import { MenuItemProps } from './MenuItem';

export interface SettingPageSecurityProps {
  item: MenuItemProps;
  index: number;
}

export const SettingPageSecurity = (props: SettingPageSecurityProps) => {
  const MESSAGE = React.useContext(MessageContext).MESSAGE;
  const [settingsDialogState, dispatch]: SettingsDialogProvider = React.useContext(
    SettingsDialogContext
  );
  const style = (color: ColorName) => ({
    backgroundColor: cardColors[color],
    zIndex: settingsDialogState.activeSettingId === props.item.id ? 200 : 150 - props.index,
  });

  let activeState = 'inactivePage';
  if (settingsDialogState.activeSettingId === props.item.id) {
    activeState = 'activePage';
  }
  else if (settingsDialogState.previousActiveSettingId === props.item.id) {
    activeState = 'previousActivePage';
  }

  const handleClick = () => {
    if (activeState !== 'activePage') {
      const action: SettingsDialogAction = {
        activeSettingId: props.item.id,
      };
      dispatch(action);
    }
  };

  return (
    <div
      style={style(props.item.color)}
      styleName='settingPageSecurity'
      className={activeState}
      onClick={handleClick}
    >
      <p>{MESSAGE('securityDetailedText')}</p>
    </div>
  );
};
