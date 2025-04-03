function AA(){}

AA.doA = function (){
    console.log("정적 메서드 doA");
}

const test = new AA();

AA.doA();//정적 메서드 호출
//test.doA();//test 인스턴스 안에는 doA() 함수 없음

//자스에서 대표적인 정적메서드는
//Math.ceil Math.floor Math.around Math.abs 등이 정적메서드
//Math 객체인데 ceil 정적메서드

//const math = new Math로 생성해서 사용하지 않고
//Math.xxx로 바로 사용함
//너무 당연한거라 신경 안씀 원인은 정적메서드로 선언되어있어서임

console.log(parseInt(Math.random()*1000));