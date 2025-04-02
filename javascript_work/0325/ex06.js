// const arr = [0];

// arr[100]=100;

// console.log(Object.getOwnPropertyDescriptors(arr));

// console.log(arr);


const brr = [1,2,3,4]

// delete brr[1];

// console.log(brr);
// console.log(brr.length);

const remove = brr.splice(1,2,10,20);

console.log(`remove ${remove}`);
console.log(brr);