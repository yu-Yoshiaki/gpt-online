/* eslint-disable @typescript-eslint/no-explicit-any */
import { RichMenu } from "@line/bot-sdk";
import { client } from "../client";
import { fetchMyReservation } from "../fetchMyReservation";
import { fetchUserInfo } from "../fetchUserInfo";
import { fetchVacancy } from "../fetchVacancy";
import fs from "fs";

export const message = (event: any) => {
  const eventText = event.message.text;

  if (eventText === "予約") {
    fetchUserInfo(event.source.userId).then((data) => {
      if (!data)
        return client.replyMessage(event.replyToken, [
          {
            type: "text",
            text: "予約のご利用には、お客様情報の登録が必要です。",
          },
          {
            type: "template",
            altText: "ユーザー登録に進みますか？",
            template: {
              type: "confirm",
              text: `ユーザー登録に進みますか？`,
              actions: [
                {
                  type: "postback",
                  label: `はい`,
                  data: `action=signup&name=null&phone=null&address=null`,
                  displayText: `ユーザー登録に進む`,
                },
                {
                  type: "postback",
                  label: `いいえ`,
                  data: `action=signup&cancel=true`,
                  displayText: `いいえ`,
                },
              ],
            },
          },
        ]);
      return client.replyMessage(event.replyToken, fetchVacancy());
    });
  } else if (eventText === "予約確認") {
    fetchMyReservation(event.source.userId).then((message) => {
      return client.replyMessage(event.replyToken, message);
    });
  } else {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "何かお困りごとはございませんか？",
    });
  }
};
