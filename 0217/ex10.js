const f = () => ({name:"홍길동", age:20});
console.log(f());

const f1 = arr => '돌아오는값';
console.log(f1());

/* 한줄인 상황
1. return 생략 가능한 경우는 한줄 일 경우
2. 원시값 반환시에는 ()소괄호 생략가능
객체값 반환시에는  () 소괄호 생략 불가

여러줄인 상황
1.{} 중괄호/return  생략 불가*/