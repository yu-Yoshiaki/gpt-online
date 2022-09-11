/* eslint-disable @typescript-eslint/no-explicit-any */
import { definitions } from "../../type/supabase";
import { client } from "../client";
import { supabase } from "../supabase";

export const unfollowAction = async (event: any) => {
  await supabase
    .from<definitions["customers"]>("customers")
    .update({
      status: "block",
    })
    .eq("lineid", event.source.userId);
};
