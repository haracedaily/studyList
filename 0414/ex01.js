const obj = {
  value: 10,
  /* well known symbol
    
    es2020
    원시값 변경되는 규칙
     */
  value2: 20,
  [Symbol.toPrimitive](hint) {
    /*  console.log(hint);
        if(hint==='number')return this.value
        if(hint==='string')return `value = ${this.value}` */
    return this.value + this.value2;
  },
  /* for of 스프레드문법 개체분해 배열분해
    객체형태 반환, next 필수, done==true?exit
    */
  [Symbol.iterator]() {
    return {
      next() {
        return { value:super.value++, done: super.value > super.value2 };
      },
    };
  },
};

console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj[Symbol.iterator]().next());
console.log(obj);
console.log(+obj); //타입변환 숫자
console.log(`${obj}`); //타입변환 문자열
console.log(obj[Symbol.iterator]().next());
