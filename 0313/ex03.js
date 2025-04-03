const arr = [1,2,3,4,5];
console.log(arr.slice(1,4));
console.log(arr.slice(2,3));

function aa(a,b,c){
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    const arr = Array.prototype.slice.call(arguments,1,3);
    arr.forEach(ele=>{
        console.log(ele);
    })
    console.log(this);
}

// aa();


const obj = {aa:10, bb:20}
//apply에서 넘겨받는 매개변수는 배열 내에서 가공해 보내준다
//call의 경우 나열하여 보내준다.
// aa.apply(obj,[10,20,30]);
// aa.call(obj,10,20,30);

aa.bind(obj,1,2,3)();
// aa();