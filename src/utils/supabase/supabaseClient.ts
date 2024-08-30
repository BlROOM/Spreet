import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// const supabaseClient = createClient(supabaseUrl, supabaseKey, {
//   auth: {
//     flowType: "pkce",
//   },
// });

export const supabaseClient = createClientComponentClient();

export default supabaseClient;
