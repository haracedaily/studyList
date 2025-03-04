function solution(emergency) {
    var answer = [];
    return emergency.map((el,i)=>{
        console.log(el);
        return [...emergency].sort((a,b)=>b-a).map((ele,idx)=>{if(ele==el)return idx+1}).filter(el=>!!el)[0];
    })
}
console.log(solution([3, 76, 24]));