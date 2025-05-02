async function a(){
    let sum = await longtime_sum(0);
    console.log(sum);
}
async function longtime_sum(sum){
    for(let i=0; i<3_000_000_000;i++){
        sum+=i;
    }
    return sum;
}
console.log('오래걸리기 시작');
setTimeout(a,0);
setTimeout(a,0);
setTimeout(a,0);
console.log('오래걸리기 끝 블로킹');