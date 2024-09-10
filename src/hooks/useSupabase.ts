import useAuthStore from "@/store/useAuthStore";
import supabase from "@/utils/supabase/supabaseClient";

export const useSupabase = () => {
  async function refreshSession() {
    const {
      data: { session },
    } = await supabase.auth.refreshSession();

    return session;
  }

  async function getSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { access_token, refresh_token } = session!;
    await setSession(access_token, refresh_token);
    return session;
  }

  async function setSession(access_token: string, refresh_token: string) {
    const {
      data: { session },
    } = await supabase.auth.setSession({ access_token, refresh_token });
    return true;
  }

  async function checkSignIn(): Promise<boolean> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // console.log("-----user----", user);

    const setSignIn = useAuthStore.getState().setSignIn;
    setSignIn(!!user);

    return !!user;
  }

  return {
    refreshSession,
    getSession,
    setSession,
    checkSignIn,
  };
};
