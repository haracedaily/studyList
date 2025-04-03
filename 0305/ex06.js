function arg(){
    //유사 배열 객체를 -> 배열객체로 만드는 방법
    //Array.prototype.slice.call 사용해야함
    //const arr = []; arr에 Array.prototype을 연결
    //const obj = {}; obj에 Object.prototype을 연결
    //const func = function(){} func에 Function.prototype을 연결

    const test = Array.prototype.slice.call(arguments,1,3);
    //slice.call(arguments); 매개변수로 전달받은 인자값 전체;
    //slice.call(arguments,인자값(start),인자값(end));매개변수를 전달받은 인자값으로 slice
    console.log(test);
}
arg(10,20,30,40,50);