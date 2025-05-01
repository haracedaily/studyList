//제너레이터 함수는 암묵적으로 객체를 리턴함
//성능평가
const infiniteFibonacci = (function* (){
    let [pre,cur] = [0,1];
    while(true){
        [pre,cur] = [cur,pre+cur];
        yield cur;
    }
})();
    
for(const num of infiniteFibonacci){
    console.log(num);
    if(num>10000)break;
}