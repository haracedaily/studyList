function solution(triangle) {
    var answer = 0;
    let prev = 0;
    for(let i=0;i<triangle.length;i++){
console.log(triangle[i][prev]>(isNaN(triangle[i][prev+1])?0:triangle[i][prev+1]));
/*console.log(triangle[i][prev]);
console.log(triangle[i][prev+1]);*/

        if(triangle[i][prev]>(isNaN(triangle[i][prev+1])?0:triangle[i][prev+1])){
            answer+=triangle[i][prev];
        }else{
            prev++;
            answer+=triangle[i][prev];
        }
    }
    return answer;
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));