import { Message } from "@line/bot-sdk";

export const inputDate: Message[] = [
  {
    type: "template",
    altText: "This is a buttons template",
    template: {
      type: "buttons",
      title: "予約日を決めてください。",
      text: "Please select",
      actions: [
        {
          type: "datetimepicker",
          mode: "date",
          label: "予約日を決めきめる。",
          data: "action=reserve&date=confirm",
        },
      ],
    },
  },
];
