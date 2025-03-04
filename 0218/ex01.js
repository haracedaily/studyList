function solution(num_list){
    var answer = [];
    for(let i = 0; i < num_list.length; i++){
        console.log(num_list[i]);
        if(num_list[i]%2==0){//짝수일때만 원하던 기능=>짝수의 갯수
            answer[0] = answer[0] ?? 0; //answer==[]즉 빈 배열 선언 answer[0]==존재하지 않음 고로 answer[0]의 초기값은 0
            answer[0] = answer[0]+1; //answer[0]의 값에 +1 시킨다. 위에 선언한건 사실 얘를 위해서임 존재하지 않는 곳에 +1 시킬 수가 없으니까
        }else{//짝수가 아닐때만  원하던 기능=>홀수의 갯수
            answer[1] = answer[1]??0; // 위랑 마찬가지
            answer[1] = answer[1]+1; //answer[1]의 값을 +1
        }
    }
    return answer;
}

console.log(solution([1,2,3,4,5]));
