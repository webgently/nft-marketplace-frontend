import React from 'react';
import { NotificationManager } from 'react-notifications';

export const Now = () => {
  return Math.round(new Date().getTime() / 1000);
}

export const tips = (type: string, html: string) => {
  switch (type) {
    case 'info': {
      NotificationManager.info(html, "Info");
      break;
    }
    case 'success': {
      NotificationManager.success(html, "Success");
      break;
    }
    case 'warning': {
      NotificationManager.warning(html, "Warning", 3000);
      break;
    }
    case 'error': {
      NotificationManager.error(html, "Error", 5000, () => { });
      break;
    }
  }
}

export const textCopy = (text: string) => {
  let textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()

  let tempText = text
  if (text.length > 10) {
    tempText = `${text.substring(0, 5)} ... ` + "..."
    tempText += text.substring(text.length, text.length - 5)
  }

  tips("success", "Copied: " + text);
}