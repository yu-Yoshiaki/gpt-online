import { TemplateMessage, TextMessage } from "@line/bot-sdk";
import { supabase } from "./supabase";
import { definitions } from "./type/supabase";

export const fetchMyReservation = async (lineid: string) => {
  const { data: reserve, error } = await supabase
    .from<definitions["reserve"]>("reserve")
    .select("*")
    .eq("lineid", lineid)
    .not("status", "eq", "キャンセル");

  if (error)
    return {
      type: "text",
      text: error.message,
    } as TextMessage;

  if (reserve.length === 0)
    return {
      type: "text",
      text: "予約情報はありません。",
    } as TextMessage;

  const message: TemplateMessage[] = reserve.map(({ date, member, reserveid }) => {
    return {
      type: "template",
      altText: "予約確認",
      template: {
        type: "buttons",
        text: `予約番号: ${reserveid}        予約日: ${date}               人数: ${member}人で予約が入っています。`,
        actions: [
          {
            type: "postback",
            label: "キャンセルする",
            displayText: "キャンセルする",
            data: `reservation=cancel&reserveid=${reserveid}&confirm=false`,
          },
        ],
      },
    } as TemplateMessage;
  });

  return message;
};
