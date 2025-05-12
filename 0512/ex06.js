const util = require('util');

const dontUseIt = util.deprecate((x)=>{
    return useIt(x);
},'dont use it more.. it will be deprecated, instead use useIt');

const useIt = (x)=>{
return x.toString();
}
console.log(dontUseIt(1));