import { supabase } from "./supabase";
import { definitions } from "../type/supabase";

export const fetchUserInfo = async (lineId: string) => {
  const { data } = await supabase
    .from<definitions["customers"]>("customers")
    .select("*")
    .eq(`lineid`, lineId)
    .not("username", "eq", null)
    .not("email", "eq", null)
    .not("phone", "eq", null)
    .single();

  console.log(data, "^-^-^-^");

  return data;
};
