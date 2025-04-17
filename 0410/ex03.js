const arr = [1,2,3,4,5];

console.log(Math.max(arr));
console.log(Math.max(...arr));

const apMax = Math.max.apply(null,arr);

console.log(apMax);

const caMax = Math.max.call(null,arr);
console.log(caMax);

const caMax2 = Math.max.call(null,...arr);
console.log(caMax2);