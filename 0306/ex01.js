function solution(my_str,n){
    let answer;
    console.log(my_str.substring(0,n));
    return answer;
}

solution("abc1Addfggg4556b",6);

// javascript 기본 제공되는 함수들의 형태
// Array.prototype.slice()
// String.prototype.substring()
// typeof string => String         연결
// Object{} => Obejct.prototype과 연결 => hasOwnProperty(),toString()
// Array[] Array.prototype 과 연결 => push,pop,slice,splice,shift,unshift
// String ''|""|``
// String.prototype과 연결 => subString(),split(),charAt(),includes,repeat

// 7월 14일...


function Person(name,age){
    this.name = name;
    this.age = age;
    this.print = function(){
        console.log(`name = ${name} age = ${age}`);
    }
}

console.log(Person.prototype);
Person.prototype.print = function(){
    console.log(`name = ${this.name} age = ${this.age}`);
};
// const p1 = new Person('홍길동',20);
// p1.print();
// const p2 = new Person('박길동',30);
// p2.print();
// const p3 = new Person('이길동',40);
// p3.print();

// // memory 허비
// console.log(p1.print == p2.print);
// console.log(p2.print == p3.print);

// // Person => prototype => function.prototype => Object.prototype

// console.log(p1.toString());
// console.log(p1.toString().length);