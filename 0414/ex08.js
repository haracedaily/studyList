Set.prototype.aa = function(){
    console.log('test');
}
Set.prototype.intersection = function(ex){
    /* const res = new Set();
    for (const element of ex) {
        this.has(element)?res.add(element):'';
    }
    return res; */
    return [...this].filter(el=>ex.has(el));
}
Set.prototype.union = function(ex){
    return new Set([...this,...ex]);
}
const set = new Set([1,2,3]);
const setB = new Set([2,3,4,5]);

console.log('aa' in set);
console.log('intersection' in set);
console.log('1' in set);
console.log(set);
console.log(set.intersection(setB));
console.log(set.union(setB));