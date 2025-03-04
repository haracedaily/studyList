const incr = function(num){
    return ++num;
}
const decr = function(num){
    return --num;
}

console.log(incr(10));
const auxs = {
    incr,
    decr
};

console.log(auxs.decr(10));