const [a,b,c = 3] = [1,2];
const [d,e=20,f=30] = [1,2,3];
// const [d,,f=30] = [1,2,3];

console.log(a);
console.log(b);
console.log(c);

console.log(d);
console.log(e);
console.log(f);