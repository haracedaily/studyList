function solution(l, r) {
    var answer = new Array(r).fill(0);
    console.log(answer);
    for(let i = Math.ceil(l/5); i<=parseInt(r/5);i++){
        if(i%10==0||i%10==1){
            answer[i]=1;
        }
    }
    let res = answer.map((el,idx)=>el==1?idx*5:0);
    res.filter(el=>!!el);
    console.log(res);
    
    return res;
}

console.log(solution(10, 20)); // [10, 11, 15, 16]