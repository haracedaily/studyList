// function makeCounter(){
//     let num = 0;
//     return function(){
//         num = (function(num){return ++num;})(num);
//         return num;
//     }

// };

const increaser = (function makeCounter(){
    let num = 0;
    return function(){
        num = (function(num){return ++num;})(num);
        console.log(num);
        return num;
    }
})();

console.log(increaser.makeCounter.num);