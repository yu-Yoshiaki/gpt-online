import { Message } from "@line/bot-sdk";

const uri = "https://liff.line.me/1657424528-doXMQvzK/signup";
export const redirectSignupMessage: Message[] = [
  {
    type: "text",
    text: "予約のご利用には、お客様情報の登録が必要です。",
  },
  {
    type: "template",
    altText: "ユーザー登録に進みますか？",
    template: {
      type: "buttons",
      text: `ユーザー登録に進みますか？`,
      actions: [
        {
          type: "uri",
          label: `ユーザー登録に進む`,
          uri,
        },
      ],
    },
  },
];
