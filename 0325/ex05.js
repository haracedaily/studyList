const arr = [,2,,4];

console.log(arr.length);

console.log(arr);
console.log(Object.getOwnPropertyDescriptors(arr))

for(let item in Object.getOwnPropertyDescriptors(arr)){
    if(item!='length')console.log(arr[item]);
}

const brr = Array.from({length:3,0:'a',1:'b'});

console.log(brr);

console.time('arr from')
const crr = Array.from('hello Mr. mountine');
console.timeEnd('arr from')
console.time('str split');
const drr = 'hello Mr. mountine'.split("");
console.timeEnd('str split');
console.log(crr);