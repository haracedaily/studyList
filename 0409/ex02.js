const isIterable = v => {
    return v !== null;
}

console.log(isIterable([]));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable({}));