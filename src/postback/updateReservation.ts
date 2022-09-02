/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "../supabase";
import { definitions } from "../type/supabase";

export const updateReservation = async ({ reserveid, data }: { reserveid: string; data: any }) => {
  const { data: reservation, error } = await supabase
    .from<definitions["reserve"]>("reserve")
    .update(data)
    .eq("reserveid", reserveid);

  if (error) return error;

  return reservation;
};
