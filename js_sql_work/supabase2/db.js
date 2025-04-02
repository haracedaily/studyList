import { createClient } from '@supabase/supabase-js';

const supabaseUrl="https://embqgdrxfblyczbenvie.supabase.co";
const supabasePw="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtYnFnZHJ4ZmJseWN6YmVudmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwMDcsImV4cCI6MjA1NTAwMTAwN30.ZsuAX5G-wfxGLCmNKOniR2t4Ia2ErMj0jjJUlTRjEFo";

const supabase = createClient(supabaseUrl,supabasePw);

export async function usersMInsert() {
    await supabase.from("users").insert([{name:'qqq',email:'qqq@naver.com'}]).select();
}

export async function usersSelectByEmail(email) {
    const res = await supabase.from("users").select().eq('email',email);
    console.log(res.data[0]);
    return res.data[0].id;
}

export async function ordersMInsert(userId){
//매개변수명이 동일하면
    const res = await supabase.from("orders")
        .insert([{user_id:userId,product_name:'노트북',price:150000},
            {user_id:userId,product_name:'아이패드프로11인m4',price:900000}]).select();
console.log(res);
}

