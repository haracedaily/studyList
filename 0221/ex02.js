function solution(s1,s2){
    var count = 0;
    for(var i = 0; i<s1.length;i++){
        console.log(s1[i]);
        for(var j=0;j<s2.length;j++){
            console.log(s2[j]);
            if(s1[i]===s2[j]){
                count++;
            }
        }
    }
    return count;
}
console.log(solution(["a","b","c"],["com","b","d"]));


quiz.map(el=>{return el.split(" ").map((el,idx,ary)=>{
        if(idx==0){
            return parseInt(ary[0])+parseInt(ary[1]+ary[2])==ary[4]?"O":"X";
        }
    }
)});