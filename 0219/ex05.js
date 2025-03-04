//node환경에서는 window출력 불가
//console.log(window);
// function countDown(n){
//     for(let i=n;i>-1;i--){
//         console.log(i);
//     }
// }

function countDown(n){
    console.log("호출됨")
    if(n<0)return;
    console.log(n);
    countDown(n-1);
}
countDown(10);