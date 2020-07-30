export interface Messages {
  exit: string;
  zoomIn: string;
  zoomOut: string;
  bringToFront: string;
  sendToBack: string;
  newCard: string;
  confirmClosing: string;
  confirmWaitMore: string;
  pleaseRestartErrorInOpeningEditor: string;
  btnCloseCard: string;
  btnOK: string;
  btnCancel: string;
  settings: string;
  trayToolTip: string;
  white: string;
  yellow: string;
  red: string;
  green: string;
  blue: string;
  orange: string;
  purple: string;
  gray: string;
  transparent: string;
  SettingsDialog: string;
  SettingPageLanguage: string;
  SettingPageSecurity: string;
  SettingPageSave: string;
}

export type MessageLabel = keyof Messages;

export const English: Messages = {
  exit: 'Exit',
  zoomIn: 'Zoom In',
  zoomOut: 'Zoom Out',
  bringToFront: 'Bring to Front',
  sendToBack: 'Send to Back',
  newCard: 'New card',
  confirmClosing:
    'Close OK?\n\nThe card will be shown again when restating the app.\nIf you want to delete the card, let it empty before closing it.)',
  confirmWaitMore:
    'It takes a long time to save. Do you want to wait a little longer?\n\nIf you press Cancel, your changes will not be saved.',
  pleaseRestartErrorInOpeningEditor:
    'The card cannot be edited.\nPlease close this app and any other apps, and then open this app again.',
  btnCloseCard: 'Close',
  btnOK: 'OK',
  btnCancel: 'Cancel',
  settings: 'Settings...',
  trayToolTip: 'Media Stickies',
  white: 'white',
  yellow: 'yellow',
  red: 'red',
  green: 'green',
  blue: 'blue',
  orange: 'orange',
  purple: 'purple',
  gray: 'gray',
  transparent: 'transparent',
  SettingsDialog: 'Settings',
  SettingPageLanguage: 'Language',
  SettingPageSecurity: 'Security',
  SettingPageSave: 'Save',
};

export const Japanese: Messages = {
  exit: '終了',
  zoomIn: '拡大',
  zoomOut: '縮小',
  bringToFront: '最前面へ',
  sendToBack: '最背面へ',
  newCard: '新規カード',
  confirmClosing:
    'カードを閉じても良いですか？\n\n閉じたカードはアプリ再起動でまた表示されます。\n削除したい場合、カードの内容を全て消してから閉じてください）',
  confirmWaitMore:
    '保存に時間が掛かっています。もう少し待ちますか？\n\nキャンセルを押すと、変更した内容は保存されない場合があります。',
  pleaseRestartErrorInOpeningEditor:
    'カードを編集できません。\n本アプリと他のアプリを全て閉じた後、本アプリをもう一度開いてください。',
  btnCloseCard: '閉じる',
  btnOK: 'はい',
  btnCancel: 'キャンセル',
  settings: '設定...',
  trayToolTip: 'Media Stickies',
  white: '白',
  yellow: '黄',
  red: '赤',
  green: '緑',
  blue: '青',
  orange: 'オレンジ',
  purple: '紫',
  gray: 'グレー',
  transparent: '透明',
  SettingsDialog: '設定',
  SettingPageLanguage: '言語',
  SettingPageSecurity: 'セキュリティ',
  SettingPageSave: '保存先',
};

let currentMessages: Messages = English;
export const setCurrentMessages = (current: Messages) => {
  currentMessages = current;
};
export const getCurrentMessages = () => {
  return currentMessages;
};
export const MESSAGE = (label: MessageLabel) => {
  return currentMessages[label];
};
