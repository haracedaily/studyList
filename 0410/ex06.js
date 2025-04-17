const arr = [1,2,3];
const brr = arr;
//const brr = arr.slice(); ex5 2014
//const brr = [...arr]; ex6 2015


arr[0]=20;
console.log(arr);
console.log(brr);