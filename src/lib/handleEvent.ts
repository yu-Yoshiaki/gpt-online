import { client } from "./client";
import { createRichMenu, setDefaultMenu, setRichMenuImage } from "./createRichMenu";
import { followMessage } from "./message/follow";
import { confirmDate, inputDate } from "./message/inputDate";
import { richMenuData } from "./message/richMenuData";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleEvent = (event: any) => {
  if (event.type === "message") {
    const eventText = event.message.text;
    if (eventText === "予約") {
      return client.replyMessage(event.replyToken, inputDate);
    } else if (eventText === "path") {
      console.log("--------");
      console.log(__dirname);
    } else if (eventText === "リッチメニュー作成") {
      createRichMenu(richMenuData)
        .then((id) => {
          console.log("id---", id);
          setRichMenuImage({ richMenuId: id, url: "../../public/richmenu3*2.png" });
          setDefaultMenu(id);
        })
        .catch((err) => {
          console.log("error", err);
        });
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
