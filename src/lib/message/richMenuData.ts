import { RichMenu } from "@line/bot-sdk";

export const richMenuData: RichMenu = {
  size: {
    width: 2500,
    height: 1686,
  },
  selected: false,
  name: "Nice richmenu",
  chatBarText: "メニューを開く",
  areas: [
    {
      bounds: {
        x: 0,
        y: 0,
        width: 833,
        height: 843,
      },
      action: {
        type: "message",
        label: "richMessage",
        text: "リッチメニュー",
      },
    },
    {
      bounds: {
        x: 833,
        y: 0,
        width: 833,
        height: 843,
      },
      action: {
        type: "postback",
        data: "action=buy&itemid=123",
      },
    },
    {
      bounds: {
        x: 1666,
        y: 0,
        width: 833,
        height: 843,
      },
      action: {
        type: "postback",
        data: "action=buy&itemid=123",
      },
    },

    {
      bounds: {
        x: 0,
        y: 843,
        width: 833,
        height: 843,
      },
      action: {
        type: "postback",
        data: "action=buy&itemid=123",
      },
    },
    {
      bounds: {
        x: 833,
        y: 843,
        width: 833,
        height: 843,
      },
      action: {
        type: "postback",
        data: "action=buy&itemid=123",
      },
    },
    {
      bounds: {
        x: 1666,
        y: 843,
        width: 833,
        height: 843,
      },
      action: {
        type: "postback",
        data: "action=buy&itemid=123",
      },
    },
  ],
};
