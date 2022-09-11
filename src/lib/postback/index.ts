/* eslint-disable @typescript-eslint/no-explicit-any */
import { Message, Postback } from "@line/bot-sdk";
import { client } from "../client";
import { cancelReservation } from "../reservation/cancelReservation";
import { setMember } from "../reservation/setMember";
import { createReservation } from "../reservation/createReservation";

export const postbackAction = async (event: any) => {
  const postbackData: Postback["data"] = event.postback.data;
  const replyMessageList: Message[] = [];

  const actionQuery = "action=";
  const confirmQuery = "confirm=(false|true)";
  const dateQuery = "date=20[0-9]{2}-[0-9]{1,}-[0-9]{1,}";

  if (new RegExp(actionQuery + "cancel&reserveid=.*&" + confirmQuery).test(postbackData)) {
    const message = await cancelReservation(postbackData);
    replyMessageList.push(message);
  }

  if (new RegExp(actionQuery + "reserve&" + dateQuery).test(postbackData)) {
    const data = postbackData.split(/action=reserve&date=|&member=|&confirm=/);

    if (data[2] === undefined) {
      replyMessageList.push(setMember(postbackData));
    } else {
      const message = await createReservation(postbackData, event.source.userId);
      replyMessageList.push(message);
    }
  }

  if (replyMessageList.length === 0) {
    return client.replyMessage(event.replyToken, {
      type: "text",
      text: "何かお困りごとはございませんか？",
    });
  }
  return client.replyMessage(event.replyToken, replyMessageList);
};
