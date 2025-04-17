const myIter = {
  [Symbol.iterator]() {
    let max = 5;
    let value = 0;
    return {
      next() {
        return {
          value: ++value,
          done: value>max,
        };
      },
    };
  },
};

//객체 안에 symbol.iterator 메서드 생성 시
// iterator 메서드는 객체를 리턴해야하고
// 리턴된 객체 안에는 next() 함수가 생성되어야함
// next 함수는 value와 done을 반환하는 객체
//37장 제너레이터
//for of로 나열
for(const ele of myIter){
    console.log(ele);
}

//Symbol.iterator => Array,map,set
//prototype 체인에 symbol.iterator
const aaa = [10,20,30];
for (const element of aaa) {
 console.log(element);
}

