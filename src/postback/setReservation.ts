import { Message, TemplateMessage } from "@line/bot-sdk";
import { supabase } from "../supabase";
import { definitions } from "../type/supabase";

type Data = { date: string; member: number; lineid: string; status: "予約済み" };

export const setReservation = async (date: string, member: number, lineid: string) => {
  const data: Data[] = [{ date, member, lineid, status: "予約済み" }];
  const { data: reservation, error } = await supabase
    .from<definitions["reserve"]>("reserve")
    .insert(data)
    .single();
  if (error)
    return {
      type: "text",
      text: error.message,
    } as Message;

  return [
    {
      type: "text",
      text: `予約日: ${reservation.date}, 人数: ${reservation.member}人で予約しました。`,
    },
    {
      type: "text",
      text: "当日は以下の情報をお見せください。",
    },
    {
      type: "text",
      text: `予約番号: ${reservation.reserveid}`,
    },
  ] as Message[];
};

export const confirmReservation = (date: string, member: number) => {
  return {
    type: "template",
    altText: "this is a confirm template",
    template: {
      type: "confirm",
      text: `予約日: ${date}, 人数: ${member}人で予約を確定しますか？`,
      actions: [
        {
          type: "postback",
          label: `確定する`,
          data: `action=reserve&date=${date}&member=${member}&confirm=true`,
          displayText: `予約を確定する`,
        },
        {
          type: "postback",
          label: `キャンセル`,
          data: `action=reserve&cancel=true`,
          displayText: `予約申し込みをキャンセルする`,
        },
      ],
    },
  } as TemplateMessage;
};
