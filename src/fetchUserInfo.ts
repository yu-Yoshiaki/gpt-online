import { supabase } from "./supabase";

export const fetchUserInfo = async (userId: string) => {
  const { data } = await supabase.from("customers").select("*").eq("lineId", userId).single();  
  return data;
};
