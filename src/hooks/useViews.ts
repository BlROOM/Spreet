// business logig hook

import supabase from "@/utils/supabase/supabaseClient";
import { useState } from "react";

export const useViews = () => {
  const [views, setViews] = useState<any[]>([]);

  const getViews = async () => {
    const { data, error } = await supabase.from("views").select("*"); //RLS policies

    if (data) {
      setViews(data);
    }
  };

  return {
    views,
    getViews,
  };
};
