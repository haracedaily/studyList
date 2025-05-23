const {createClient} = require("@supabase/supabase-js");

exports.supabase = createClient(process.env.VITE_SUPABASE_URL,process.env.VITE_SUPABASE_ANON_KEY);
