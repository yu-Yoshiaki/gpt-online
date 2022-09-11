/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextMessage } from "@line/bot-sdk";

const count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const setMember: (a: string) => TextMessage = (a) => {
  return {
    type: "text",
    text: "人数を入力してください。",
    quickReply: {
      items: count.map((c) => {
        return {
          type: "action",
          action: {
            type: "postback",
            label: `${c}人`,
            data: a + `&member=${c}&confirm=false`,
            displayText: `${c}人で予約する`,
          },
        };
      }),
    },
  };
};
