/* eslint-disable @typescript-eslint/no-explicit-any */
import { definitions } from "../../type/supabase";
import { client } from "../client";
import { supabase } from "../supabase";

export const followAction = async (event: any) => {
  const profile = await client.getProfile(event.source.userId);
  await supabase.from<definitions["customers"]>("customers").upsert([
    {
      lineid: profile.userId,
      displayname: profile.displayName,
      pictureurl: profile.pictureUrl,
      status: "follow",
    },
  ]);

  return client.replyMessage(event.replyToken, {
    type: "text",
    text: "登録ありがとうございます。",
  });
};
