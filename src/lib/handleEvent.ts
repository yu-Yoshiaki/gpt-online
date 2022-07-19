import { client } from "./client";
import { followMessage } from "./message/follow";
import { confirmDate, inputDate } from "./message/inputDate";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleEvent = (event: any) => {
  if (event.type === "message") {
    const eventText = event.message.text;
    if (eventText === "予約") {
      return client.replyMessage(event.replyToken, inputDate);
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

  if (event.type === "postback") {
    console.log(event.postback);
    if (event.postback.data === "action=reserve") {
      const messages = confirmDate(event);
      return client.replyMessage(event.replyToken, messages);
    } else if (event.postback.data === "action=reserve&date=confirm") {
      const messages = confirmDate(event);
      return client.replyMessage(event.replyToken, messages);
    } else if (event.postback.data === "action=reserve&date=retry") {
      return client.replyMessage(event.replyToken, inputDate);
    }
  }

  return Promise.resolve(null);
};
