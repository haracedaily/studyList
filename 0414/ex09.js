Set.prototype.isSuperSet = function(set){
    return [...set].every(el => this.has(el));
}

const setA = new Set([1,2,3,4,5]);
const setB = new Set([2,3]);

console.log(setA.isSuperSet(setB));
console.log(setB.isSuperSet(setA));