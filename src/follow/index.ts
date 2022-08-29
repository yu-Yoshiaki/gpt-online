/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "../client";

export const follow = (event: any) => {
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: "登録ありがとうございます。",
  });
};
