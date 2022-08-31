import { supabase } from "./supabase";
import { definitions } from "./type/supabase";

export const fetchUserInfo = async (lineId: string) => {
  const { data } = await supabase
    .from<definitions["customers"]>("customers")
    .select("*")
    .eq("lineid", lineId)
    .single();
  return data;
};
