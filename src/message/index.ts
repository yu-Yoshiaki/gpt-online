/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "../client";
import { fetchMyReservation } from "../fetchMyReservation";
import { fetchUserInfo } from "../fetchUserInfo";
import { fetchVacancy } from "../fetchVacancy";
import { redirectSignupMessage } from "./redirectSignupMessage";
import { Message } from "@line/bot-sdk";

export const message = async (event: any) => {
  const eventText = event.message.text;

  const message = async () => {
    const replyM: Message[] = [];
    if (eventText === "予約" || /予約(する|したい|申し込[みむ])/.test(eventText)) {
      const data = await fetchUserInfo(event.source.userId);
      if (!data) {
        replyM.push(...redirectSignupMessage);
      } else {
        replyM.push(fetchVacancy());
      }
    }

    if (eventText === "予約確認") {
      const data = await fetchMyReservation(event.source.userId);
      replyM.push(...data);
    }

    return replyM;
  };

  message().then((message) => {
    if (message.length === 0) {
      return client.replyMessage(event.replyToken, {
        type: "text",
        text: "何かお困りごとはございませんか？",
      });
    }
    return client.replyMessage(event.replyToken, message);
  });
};
