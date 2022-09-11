import { TextMessage } from "@line/bot-sdk";
import { updateReservation } from "./updateReservation";

export const cancelReservation = async (postbackData: string) => {
  const data = postbackData.split(/action=cancel&reserveid=|&confirm=/);
  const reserveid = data[1];
  const confirm = data[2];

  if (confirm === "false") {
    return {
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
              data: `action=cancel&reserveid=${reserveid}&confirm=true`,
            },
          },
        ],
      },
    } as TextMessage;
  }

  const { error } = await updateReservation({ reserveid, data: { status: "キャンセル" } });

  if (error) {
    return {
      type: "text",
      text: error.message,
    } as TextMessage;
  }

  return {
    type: "text",
    text: "予約を取り消しました。",
  } as TextMessage;
};
