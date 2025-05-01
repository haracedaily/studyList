
const set = new Set([1,2,3]);

console.log(set);

//add의 반환값은 set
set.add(4).add(5).add(6);

console.log(set);

set.add(NaN);

console.log(set);
//delete의 반환값은 true,false이다.
set.delete(NaN);
set.delete(NaN);
console.log(set);

set.clear();
console.log(set);
console.log(isNaN(NaN)&&isNaN(NaN));
console.log(NaN===NaN);