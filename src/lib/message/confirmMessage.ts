import { TemplateMessage } from "@line/bot-sdk";

export const confirmMessage: TemplateMessage = {
  type: "template",
  altText: "this is a confirm template",
  template: {
    type: "confirm",
    text: "予約の申し込みでよろしいですか？",
    actions: [
      {
        type: "postback",
        label: "はい",
        data: "action=reserve",
        displayText: "はい",
      },
      {
        type: "message",
        label: "いいえ",
        text: "いいえ",
      },
    ],
  },
};

export const A = {
  type: "text",
  text: "下記から選択してください。",
  quickReply: {
    items: [
      {
        type: "action",
        action: {
          type: "postback",
          label: "予約する",
          data: "action=buy&itemid=111",
          displayText: "予約する",
        },
      },
      {
        type: "action",
        action: {
          type: "cameraRoll",
          label: "Send photo",
        },
      },
      {
        type: "action",
        action: {
          type: "camera",
          label: "Open camera",
        },
      },
    ],
  },
};
