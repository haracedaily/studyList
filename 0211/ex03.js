var x = 10;
console.log(typeof x);
var y = x.toString();
console.log(typeof y);
console.log(x+y.repeat(2));

var z = "10.5";
console.log(typeof z);

if(/[0-9]/.test(z)){
    var q = Number(z);
    console.log(typeof q);
    console.log(q);
}

var qq = parseInt(z);
console.log(typeof qq);
console.log(qq);