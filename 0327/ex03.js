const sequ = (length=1)=>Array.from({length},(_,i)=>i+1);

//const sequ = function(length=1){return Array.from({length},(_,i)=>i+1)}


let arr = sequ(3);
console.log(arr.includes(1,-1));
console.log(sequ());