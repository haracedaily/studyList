import { createClient } from '@supabase/supabase-js';

const supabaseUrl="https://embqgdrxfblyczbenvie.supabase.co";
const supabasePw="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtYnFnZHJ4ZmJseWN6YmVudmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwMDcsImV4cCI6MjA1NTAwMTAwN30.ZsuAX5G-wfxGLCmNKOniR2t4Ia2ErMj0jjJUlTRjEFo";

const supabase = createClient(supabaseUrl,supabasePw);


export async function user_select(name,email){
    if(!name&&!email){
    const res = await supabase.from("users").select();
    !!res.error?console.log(res.error):console.log(res.data);
    }else if(!!name&&!email){
        const res = await supabase.from("users").select().eq('name',name);
        !!res.error?console.log(res.error):console.log(res.data);
    }else{
        const res = await supabase.from("users").select().eq('email',email);
        !!res.error?console.log(res.error):console.log(res.data);
    }
}
export async function user_insert(name, email){
    const res = await supabase.from("users").insert([{name, email}]);
}
export async function user_update(name,email){
    const res = await supabase.from("users").update({name}).eq('email',email);
}
export async function user_delete(email){
    const res = await supabase.from("users").delete().eq('email',email)
}