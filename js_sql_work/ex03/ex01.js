const readline = require('readline/promises')

//node에서 내장객체
//global process
// console.log(process);
//readline readline/promises

const rl = readline.createInterface({
    input: process.stdin,//터미널 입력
  output: process.stdout//터미널 출력
});

//비동기 함수 선언
//await 사용자 입력 기다림
async function getInput(){
    const name = await rl.question("이름 입력해봐");
    console.log(`name = ${name}`);
    rl.close();
};

getInput();

//require('readline')
//콜백(고차함수)
//question호출하며 ()함수를 매개변수 보내야하는 방법
// rl.question("이름만입력해봐\n",name=>{
//     console.log(`name = ${name}`);
//    rl.close();
// });