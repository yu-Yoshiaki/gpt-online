import { FlexMessage, Message, TemplateMessage, TextMessage } from "@line/bot-sdk";
import { supabase } from "../supabase";
import { definitions } from "../../type/supabase";
import dayjs from "dayjs";

export const fetchMyReservation = async (lineid: string) => {
  const { data: reserve, error } = await supabase
    .from<definitions["reserve"]>("reserve")
    .select("*")
    .eq("lineid", lineid)
    .not("status", "eq", "キャンセル")
    .limit(3);

  if (error)
    return [
      {
        type: "text",
        text: error.message,
      },
    ] as TextMessage[];

  if (reserve.length === 0)
    return [
      {
        type: "text",
        text: "予約情報はありません。",
      },
    ] as TextMessage[];

  const message: Message[] = [
    { type: "text", text: "直近の予約の3件表示しています。" },
    {
      type: "flex",
      altText: "this is a confirm template",
      contents: {
        type: "carousel",
        contents: reserve.map(({ date, reserveid }) => {
          const day = dayjs(date);
          return {
            type: "bubble",
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "予約情報",
                  weight: "bold",
                  size: "lg",
                },
                {
                  type: "box",
                  layout: "vertical",
                  margin: "lg",
                  spacing: "sm",
                  contents: [
                    {
                      type: "box",
                      layout: "baseline",
                      spacing: "md",
                      contents: [
                        {
                          type: "text",
                          text: "場所",
                          color: "#aaaaaa",
                          size: "sm",
                          flex: 1,
                        },
                        {
                          type: "text",
                          text: "THE HOTEL-TOKYO",
                          wrap: true,
                          color: "#666666",
                          size: "sm",
                          flex: 3,
                        },
                      ],
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      spacing: "md",
                      contents: [
                        {
                          type: "text",
                          text: "予約番号",
                          color: "#aaaaaa",
                          size: "sm",
                          flex: 1,
                        },
                        {
                          type: "text",
                          text: reserveid,
                          wrap: true,
                          color: "#666666",
                          size: "sm",
                          flex: 3,
                        },
                      ],
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      spacing: "md",
                      contents: [
                        {
                          type: "text",
                          text: "予約日",
                          color: "#aaaaaa",
                          size: "sm",
                          flex: 1,
                        },
                        {
                          type: "text",
                          text: day.format("M月D日"),
                          wrap: true,
                          color: "#666666",
                          size: "sm",
                          flex: 3,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            footer: {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              contents: [
                {
                  type: "separator",
                },
                {
                  type: "button",
                  style: "link",
                  height: "sm",
                  action: {
                    type: "postback",
                    label: "キャンセルする",
                    displayText: "キャンセルする",
                    data: `action=cancel&reserveid=${reserveid}&confirm=false`,
                  },
                },
              ],
              flex: 0,
            },
          };
        }),
      },
    },
  ];
  return message;
};
