const a = '10.45';
console.log(typeof a);
const b = Number(a);
console.log(typeof b);

const c = new String("10.45");
const d = String("10.45");
console.log(c);
console.log(typeof c);
console.log(d);
console.log(typeof d);


const test = new Function('x','return x**x;');
console.log(test(3));


let num =0;
const increase = function(){++num; return num};
const decrease = ()=>{--num; return num};
const fillow = {increase,decrease};
fillow.increase();
console.log(num);
fillow.decrease();
console.log(num);