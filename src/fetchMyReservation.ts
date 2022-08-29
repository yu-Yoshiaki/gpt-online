import { TemplateMessage, TextMessage } from "@line/bot-sdk";
import { supabase } from "./supabase";

export const fetchMyReservation = async (userId: string) => {
  const { data: reserve, error } = await supabase
    .from("reserve")
    .select("*")
    .eq("userId", userId)
    .not("status", "eq", "キャンセル");

  console.log("reserve:", reserve);
  console.log("error:", error);

  if (error) {
    const message: TextMessage = {
      type: "text",
      text: "予約情報はありません。",
    };
    return message;
  }

  const message: TemplateMessage[] = reserve.map(({ date, member, id }) => {
    return {
      type: "template",
      altText: "予約確認",
      template: {
        type: "buttons",
        text: `予約日: ${date}、 人数: ${member}人で予約が入っています。`,
        actions: [
          {
            type: "postback",
            label: "キャンセルする",
            displayText: "キャンセルする",
            data: `reservation=cancel&id=${id}`,
          },
        ],
      },
    } as TemplateMessage;
  });

  return message;
};
