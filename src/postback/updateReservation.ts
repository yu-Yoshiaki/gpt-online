/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "../supabase";

export const updateReservation = async ({ id, data }: { id: number; data: any }) => {
  const { data: reservation, error } = await supabase.from("reserve").update(data).eq("id", id);

  if (error) return error;

  return reservation;
};
