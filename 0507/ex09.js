const a = null;
console.log(a||3);
console.log(a&&3);
console.log(a?? 3);

const c = null;

console.log(c?.d);
console.log(c?.d ?? 3);