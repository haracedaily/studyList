// const readline = require("readline/promises");
//require() => common js BackEnd
//import from => module.js FrontEnd

import { createClient } from '@supabase/supabase-js';
import { createInterface } from 'readline/promises';

const supabaseUrl="https://embqgdrxfblyczbenvie.supabase.co";
const supabasePw="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtYnFnZHJ4ZmJseWN6YmVudmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwMDcsImV4cCI6MjA1NTAwMTAwN30.ZsuAX5G-wfxGLCmNKOniR2t4Ia2ErMj0jjJUlTRjEFo";

const supabase = createClient(supabaseUrl,supabasePw);

const res = await supabase.from('users').select();
console.log(res);

// const res = await supabase
//   .from('users')
//   .insert([{ name: 'Ali', email: 'ali@example.com' }]);
// console.log(res);
// const {status,statusText} = res;
// console.log(status);
// console.log(statusText);

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const name = await rl.question('이름뭐야')
// console.log(`name ${name}`);

// rl.close();