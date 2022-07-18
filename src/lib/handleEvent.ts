import { client } from "./client";
import { followMessage } from "./message/follow";
import { reservationRes } from "./message/reservationRes";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleEvent = (event: any) => {
  if (event.type === "message") {
    const eventText = event.message.text;
    if (eventText === "予約") {
      return client.replyMessage(event.replyToken, reservationRes);
    } else {
      return client.replyMessage(event.replyToken, {
        type: "text",
        text: "何かお困りごとはございますか?",
      });
    }
  }

  if (event.type === "follow") {
    return client.replyMessage(event.replyToken, followMessage);
  }

  return Promise.resolve(null);
};
