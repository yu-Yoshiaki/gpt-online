/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "../client";
import { fetchMyReservation } from "../reservation/fetchMyReservation";
import { fetchUserInfo } from "../fetchUserInfo";
import { fetchVacancy } from "../reservation/fetchVacancy";
import { redirectSignupMessage } from "./redirectSignupMessage";
import { Message, TextMessage } from "@line/bot-sdk";
import { supabase } from "../supabase";
import { definitions } from "../../type/supabase";

export const messageAction = async (event: any) => {
  const eventText = event.message.text;
  const messageList: Message[] = [];

  if (eventText === "予約" || /予約(する|したい|申し込[みむ])/.test(eventText)) {
    const data = await fetchUserInfo(event.source.userId);
    if (!data) {
      messageList.push(...redirectSignupMessage);
    } else {
      messageList.push(fetchVacancy());
    }
  }

  if (eventText === "予約確認") {
    const data = await fetchMyReservation(event.source.userId);
    messageList.push(...data);
  }
  if (eventText === "テスト") {
    const message: TextMessage = {
      type: "text",
      text: "テスト",
      quickReply: {
        items: [
          {
            type: "action",
            action: {
              type: "postback",
              displayText: "postbackテスト",
              label: "postback_test",
              data: "action=cancel",
            },
          },
        ],
      },
    };
    messageList.push(message);
  }

  if (messageList.length === 0) {
    await supabase.from<definitions["talks"]>("talks").upsert({
      istype: event.type,
      messagetype: event.message.type,
      messageid: event.message.id,
      messagetext: event.message.text,
      ismode: event.mode,
      istimestamp: event.timestamp,
      replytoken: event.replyToken,
      webhookeventid: event.webhookEventId,
      isredelivery: event.deliveryContext.isRedelivery,
      userId: event.source.userId,
    });
    return;
  }

  return client.replyMessage(event.replyToken, messageList);
};
