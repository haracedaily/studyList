const supabase = require("@supabase/supabase-js");

const supabaseUrl = "https://wqetnltlnsvjidubewia.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxZXRubHRsbnN2amlkdWJld2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzI5NDksImV4cCI6MjA1ODM0ODk0OX0.-Jw0jqyq93rA7t194Kq4_umPoTci8Eqx9j-oCwoZc6k";
const connSupabase = supabase.createClient(supabaseUrl, supabasePassword);

exports.supabase = connSupabase;