const arr = Array.of(1,2,3,4);
console.log(arr);

const brr = Array.from([1,2,3,4]);
console.log(brr);

//배열에서만 사용 가능 객체에서 사용안됨
for (const element of arr) {
    console.log(element);
}

//객체에서 사용하는 것 그러나 배열도 가능
for (const key in arr) {
   console.log(key);
}