const readline = require('readline/promises');
const { people_select } = require("../ex02/db/select");
const { people_insert } = require("../ex02/db/insert");
const people_delete = require("../ex02/db/delete");
const people_update = require("../ex02/db/update");

//객체 디스터럭쳐링
/* const obj = {a:10,b:function(){}};
const {a,b} = obj;
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getInput() {
    let switching = true;
    while (switching) {
        const number = await rl.question("1.select 2.insert 3.update 4.delete 0.종료\n");
        console.log('===================-----------====================');
        switch (number) {
            case '1': console.log('1입력');
                people_select();
                break;
            case '2': console.log('2입력');
                const name = await rl.question("이름 입력: \n");
                const age = await rl.question("나이 입력: \n");
                people_insert(name, age);
                break;
            case '3':
                //수정
                people_select();
                people_update(await rl.question("변경할 이름 : \n"),await rl.question("변경할 나이 : \n"),await rl.question("변경할 id : \n"));
                break;
            case '4':
                //삭제
                people_delete(await rl.question("삭제할 ID 입력 : \n"));
                break;
            case '0':
                switching = false;
                rl.close();
                break;
            default: console.log(`number = ${number}`);
                break;
        }
    }

}

getInput();
