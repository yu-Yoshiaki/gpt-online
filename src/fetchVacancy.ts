import { FlexMessage } from "@line/bot-sdk";

export const fetchVacancy: () => FlexMessage = () => {
  //本番ではカレンダーからfetchする
  const date = [
    {
      year: "22",
      month: 11,
      days: [
        { day: 1, avail: 1 },
        { day: 2, avail: 1 },
        { day: 3, avail: 0 },
        { day: 4, avail: 0 },
        { day: 5, avail: 0 },
        { day: 6, avail: 1 },
        { day: 7, avail: 1 },
        { day: 8, avail: 0 },
      ],
    },
    {
      year: "22",
      month: 12,
      days: [
        { day: 1, avail: 1 },
        { day: 2, avail: 1 },
        { day: 3, avail: 0 },
        { day: 4, avail: 0 },
        { day: 5, avail: 0 },
        { day: 6, avail: 1 },
        { day: 7, avail: 1 },
        { day: 8, avail: 0 },
      ],
    },
    {
      year: "23",
      month: 1,
      days: [
        { day: 1, avail: 1 },
        { day: 2, avail: 1 },
        { day: 3, avail: 0 },
        { day: 4, avail: 0 },
        { day: 5, avail: 0 },
        { day: 6, avail: 1 },
        { day: 7, avail: 1 },
        { day: 8, avail: 0 },
        { day: 20, avail: 0 },
      ],
    },
    {
      year: "23",
      month: 2,
      days: [
        { day: 1, avail: 1 },
        { day: 2, avail: 1 },
        { day: 3, avail: 0 },
        { day: 4, avail: 0 },
        { day: 5, avail: 0 },
        { day: 6, avail: 1 },
        { day: 7, avail: 1 },
        { day: 8, avail: 0 },
      ],
    },
    {
      year: "23",
      month: 3,
      days: [
        { day: 1, avail: 1 },
        { day: 2, avail: 1 },
        { day: 3, avail: 0 },
        { day: 4, avail: 0 },
        { day: 5, avail: 0 },
        { day: 6, avail: 1 },
        { day: 7, avail: 1 },
        { day: 8, avail: 0 },
      ],
    },
  ];

  const message: FlexMessage = {
    type: "flex",
    altText: "空室検索",
    contents: {
      type: "carousel",
      contents: date.map(({ month, days, year }) => {
        return {
          type: "bubble",
          header: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "予約程を選ぶ",
                size: "xxs",
              },
              {
                type: "text",
                text: `${month}月`,
                weight: "bold",
              },
            ],
            spacing: "md",
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: days.map(({ day, avail }) => {
              return {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "box",
                    layout: "vertical",
                    contents: [
                      {
                        type: "text",
                        text: `${day}日`,
                      },
                    ],
                    backgroundColor: avail > 0 ? "#83e632" : "#FFD700",
                    flex: 2,
                    cornerRadius: "md",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40px",
                  },
                  {
                    type: "text",
                    text: avail > 0 ? "空き多め" : "残りわずか",
                    align: "center",
                  },
                ],
                height: "40px",
                action: {
                  type: "postback",
                  label: `${day}日`,
                  displayText: `${month}月${day}日で予約`,
                  data: `action=reserve&date=20${year}-${month < 10 ? `0${month}` : month}-${
                    day < 10 ? `0${day}` : day
                  }`,
                },
                justifyContent: "center",
                spacing: "md",
                alignItems: "center",
              };
            }),
            spacing: "md",
          },
          styles: {
            body: {
              separator: true,
            },
          },
        };
      }),
    },
  };

  return message;
};
