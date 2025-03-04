var x = 'global x';
var y = 'global y';
var z;
function outer(){
    var z = "outer's local z";
    console.log(z);
    console.log(x);
    console.log(y);
    function inner(){
        var x = "inner's local x";
        var y = "inner's local y";
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();

}
outer();
console.log(x);
console.log(y);
console.log(z);