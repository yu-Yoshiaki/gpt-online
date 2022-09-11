/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "../../lib/supabase";
import { definitions } from "../../type/supabase";

type Data = { reserveid: string; data: any };
export const updateReservation = async ({ reserveid, data }: Data) => {
  const { error } = await supabase
    .from<definitions["reserve"]>("reserve")
    .update(data)
    .eq("reserveid", reserveid);

  return { error };
};
