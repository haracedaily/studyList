function solution(ingredient) {
    var answer = 0;
    let igr = ingredient.join("");
    while(igr.match(/1231/g)?.length>0){

        igr=igr.replace('1231','');
            answer++;
            
    }
    
    return answer;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);