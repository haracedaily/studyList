function solution(score) {
    let answer=[];
    score.map((el,idx)=>[(el[0]+el[1])/2,idx]).sort((a,b)=>b[0]-a[0]).map((el,idx,ary)=>ary[idx-1]?.[0]!=ary[idx][0]?answer[el[1]]=idx+1:answer[el[1]]=idx);
    return score.map((el,idx)=>(el[0]+el[1])/2).sort((a,b)=>b-a);
}
console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]));