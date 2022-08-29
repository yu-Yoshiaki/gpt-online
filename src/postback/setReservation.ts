import { TemplateMessage, TextMessage } from "@line/bot-sdk";
import { supabase } from "../supabase";

type Data = { date: string; member: number; userId: string; status: "予約済み" };
export const setReservation = async (date: string, member: number) => {
  const data: Data[] = [
    { date, member, userId: "c8a64e92-b779-4492-9bf4-483b8dd4c731", status: "予約済み" },
  ];
  const { data: reservation, error } = await supabase.from("reserve").insert(data);
  if (error)
    return {
      type: "text",
      text: error.message,
    } as TextMessage;

  return {
    type: "text",
    text: `予約日: ${reservation[0].date}, 人数: ${reservation[0].member}人で予約しました。`,
  } as TextMessage;
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
