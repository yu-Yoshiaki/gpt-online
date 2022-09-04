import { client } from "../client";
import { updateReservation } from "./updateReservation";

export const cancelReservation = (poctbackData: string, replyToken: string) => {
  const data = poctbackData.split(/reservation=cancel&reserveid=|&confirm=/);
  const reserveid = data[1];
  const confirm = data[2];

  if (confirm === "false") {
    return client.replyMessage(replyToken, {
      type: "text",
      text: `予約番号: ${reserveid}をキャンセルいたしますか?`,
      quickReply: {
        items: [
          {
            type: "action",
            action: {
              type: "postback",
              label: "はい",
              displayText: "はい",
              data: `reservation=cancel&reserveid=${reserveid}&confirm=true`,
            },
          },
        ],
      },
    });
  }
  updateReservation({ reserveid, data: { status: "キャンセル" } })
    .then(() => {
      return client.replyMessage(replyToken, {
        type: "text",
        text: "予約を取り消しました。",
      });
    })
    .catch((err: any) => {
      return client.replyMessage(replyToken, {
        type: "text",
        text: err.message,
      });
    });
};
