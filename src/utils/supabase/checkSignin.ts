import supabase from "@/utils/supabase/supabaseClient";
import useAuthStore from "@/store/useAuthStore";

async function checkSignIn(): Promise<boolean> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const setSignIn = useAuthStore.getState().setSignIn;
  setSignIn(!!user);

  return !!user;
}

export default checkSignIn;
