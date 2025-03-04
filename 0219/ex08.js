//콜백함수
//자바, 파이썬
//lamda x:x+1 파이썬
//interface 자바
function repeat(n,func){
    for(i=0;i<n;i++){
        if(i%2)
        func(i);
    }
}

//함수 리터럴
repeat(5,function(){console.log('test')})

var log = (aa)=>console.log(`>>> ${aa}`);
repeat(4,log);

//콜백함수 매개변수로 보냄
//고차함수 반환되는 값이 함수 return function(){}
//중첩함수 outer(){inner(){}}
