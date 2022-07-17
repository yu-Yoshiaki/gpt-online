import { Message, TextMessage } from "@line/bot-sdk";
import { client } from "./client";
import { reservationRes } from "./message/reservationRes";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleEvent = (event: any) => {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }
  const messages: Message[] = [];
  if (event.message.text === "予約") {
    messages.push(reservationRes);
  } else {
    messages.push({
      type: "text",
      text: "何かお困りごとはございますか?",
    } as TextMessage);
  }
  return client.replyMessage(event.replyToken, messages);
};
