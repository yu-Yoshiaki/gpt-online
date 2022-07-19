/* eslint-disable @typescript-eslint/no-explicit-any */
import { Message } from "@line/bot-sdk";

export const inputDate: Message[] = [
  {
    type: "text",
    text: "予約申し込みでよろしいですか？",
  },
  {
    type: "template",
    altText: "This is a buttons template",
    template: {
      type: "buttons",
      thumbnailImageUrl: "/public/image01.jpg",
      imageAspectRatio: "square",
      imageSize: "cover",
      text: "下記のボタンより予約日を決めてください。",
      actions: [
        {
          type: "datetimepicker",
          mode: "date",
          label: "予約日を決める。",
          data: "action=reserve&date=confirm",
        },
        {
          type: "message",
          label: "いいえ",
          text: "いいえ",
        },
      ],
    },
  },
];

export const confirmDate: (event: any) => Message[] = (event) => [
  {
    type: "text",
    text: "確認中...",
  },
  {
    type: "template",
    altText: "this is a confirm template",
    template: {
      type: "confirm",
      text: `${event.postback.params.date}でよろしいでしょうか？`,
      actions: [
        {
          type: "message",
          label: "はい",
          text: "はい",
        },
        {
          type: "message",
          label: "いいえ",
          text: "no",
        },
      ],
    },
  },
];
