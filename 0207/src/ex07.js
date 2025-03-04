var a=null;
console.log(typeof a);

if (a==null){
    console.log('true');

}
console.log(typeof a === null)

var b = {a:10,aa:20};
console.log(b);

delete b.a;
console.log(b);


function solution(sides) {
    let answer = Math.max(...sides);
    let arr = sides.filter(el=>el!=answer);
    let sum = 0;
    arr.forEach(el=>sum += el);
    return sum>answer?1:2;
}