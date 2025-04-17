Array.prototype.Symbol.for('sum') = function(){
    return this.reduce((a,b)=>a+b,0);
}

Array.prototype.max = function(){
    return Math.max(...this);
}

let a = [10,20,30,40,25];

console.log(a.Symbol.for('sum')());
console.log(a.max());