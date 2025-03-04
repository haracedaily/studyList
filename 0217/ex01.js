// 1.continue break
// 1.홀수만 출력

// 1~9까지 for
// win+; 이모지 출력

for (let i = 1; i<10; i++){
    if(i%2==0) continue;
    if(i%3==0) continue;
    console.log(`i=${i}`);
}

for ( let i= 1; i<10; i++){
    if(i%2==0&&i%3==0){
        console.log(`최소공배수 i=${i}`)
        break;
    }
}