/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "../client";
import { fetchMyReservation } from "../fetchMyReservation";
import { fetchUserInfo } from "../fetchUserInfo";
import { fetchVacancy } from "../fetchVacancy";
import { redirectSignupMessage } from "./redirectSignupMessage";

export const message = (event: any) => {
  const eventText = event.message.text;

  if (eventText === "予約" || /予約(する|したい|申し込[みむ])/.test(eventText)) {
    fetchUserInfo(event.source.userId).then((data) => {
      if (!data) return client.replyMessage(event.replyToken, redirectSignupMessage);
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
