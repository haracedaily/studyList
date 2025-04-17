const oobj = {aa:10,bb:20};
const aaa = oobj.aa;
const bbb = oobj.bb;

console.log(aaa);
console.log(bbb);

const obj = {aa:10,bb:20};
const {aa,bb}= obj;

console.log(aa);
console.log(bb);

const {aa:a=33, bb:b} = {bb:20};
console.log(a);
console.log(b);