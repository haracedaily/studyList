function A1(){

}

class A2{
    doA(){
        //x=10; default로 strict모드라 선언 없이 불가
        console.log(this);
    }
}

A1();//일반함수 호출 가능
new A1();//생성자 함수 호출 가능

// A2(); 일반 함수 호출 불가능
const a2 = new A2();//생성자 함수 호출 가능
a2.doA();