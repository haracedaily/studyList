function solution(money){
    var answer=[];
    var price = 5500;
    var count = 0;
    while(true){
        if(money<price*count){
            break;
        }
        count++;
        console.log(price*count);
    }
    return answer;

}
console.log(solution(5500));