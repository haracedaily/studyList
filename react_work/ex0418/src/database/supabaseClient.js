import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://embqgdrxfblyczbenvie.supabase.co'; // 너의 Supabase 프로젝트 URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtYnFnZHJ4ZmJseWN6YmVudmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwMDcsImV4cCI6MjA1NTAwMTAwN30.ZsuAX5G-wfxGLCmNKOniR2t4Ia2ErMj0jjJUlTRjEFo'; // Supabase에서 발급한 익명 키

export const supabase = createClient(supabaseUrl, supabaseKey);