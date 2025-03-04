function doA(){
    this.aa = 10;
    this.bb = 20;
    //return {}; 객체를 명시적으로 리턴하면 생성자함수로 생성해도 해당 객체가 리턴
    //return 100; 원시값의 경우 생성자 함수로 생성시 무시; 일반 실행시 원시값 리턴
}

const aa = new doA();
console.log(aa);

console.log(doA());


