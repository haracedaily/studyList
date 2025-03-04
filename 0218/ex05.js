//클로져
//익명함수 즉시호출
(function(){
    var a = 10;
    return function(x,y){
        return x+y+a;
    }
}());
var add1 = (function() {
    var a = 10;
    return function(x,y){
        return x+y+a;
    }
}());

console.log(add1(1,2));