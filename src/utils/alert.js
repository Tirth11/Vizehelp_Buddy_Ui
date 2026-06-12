import { Platform, Alert } from 'react-native';

export const showAlert = (title, message, buttons) => {
  if (Platform.OS === 'web') {
    // If no buttons, just trigger simple alert
    if (!buttons || buttons.length === 0) {
      alert(message || title);
      return;
    }

    // If only one action button, trigger alert and call its handler
    if (buttons.length === 1) {
      alert(message || title);
      if (buttons[0].onPress) {
        buttons[0].onPress();
      }
      return;
    }

    // If confirmation required (2 buttons), use window.confirm
    if (buttons.length === 2) {
      const confirmBtn = buttons.find(b => b.style !== 'cancel') || buttons[1];
      const cancelBtn = buttons.find(b => b.style === 'cancel') || buttons[0];

      const confirmed = window.confirm(`${title}\n\n${message || ''}`);
      if (confirmed) {
        if (confirmBtn.onPress) confirmBtn.onPress();
      } else {
        if (cancelBtn.onPress) cancelBtn.onPress();
      }
      return;
    }
  } else {
    // Fallback to standard react-native Alert on iOS/Android
    Alert.alert(title, message, buttons);
  }
};
