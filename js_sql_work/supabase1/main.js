import { createInterface } from "readline/promises";
import { user_delete, user_insert, user_select, user_update } from "./db.js";

const rl = createInterface({
         input: process.stdin,
         output: process.stdout,
     });
let condition=true;
while(condition){
     const resolve = await rl.question("what need? 1.select 2.insert 3.update 4.delete 5.exit\n");
     switch (resolve){
     case '1' : 
     const res = await rl.question('need condition? 1.All 2.name 3.email\n')
     if(res==1){
        user_select();
     }else if(res==2){
        user_select(await rl.question('what name? \n'));
     }else{
        user_select(null,await rl.question('what email?\n'));
     }
     break;
     case '2' :
        user_insert(await rl.question("이름?\n"),await rl.question("메일?\n"));
        break;
     case '3' :
        user_update(await rl.question("이름?\n"),await rl.question("메일?\n"));
        break;
     case '4' :
        user_delete(await rl.question("메일?\n"));
        break;
     case '5' : 
     rl.close();
     condition=false;
     break;
     }
    }

