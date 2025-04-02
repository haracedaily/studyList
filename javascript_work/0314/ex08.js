const counter = function (){
    let num = 0;
    function counter(){
    }
    counter.prototype.increase = function(){
        ++num;
        return num;
    }
    counter.prototype.decrease = function(){
        --num;
        return num;
    }

    return counter;
};
const cn = counter();
console.log(cn.prototype.increase());
console.log(cn.prototype.increase());
console.log(cn.prototype.decrease());