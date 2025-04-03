class MyArray extends Array{
    uniq(){
        const MyArr= [...new Set(this)];
        return MyArr;
    }
    average(){
        return this.reduce((a,b)=>{
            return a+b
        })/this.length;
    }
}


const arr = new MyArray(10,20,30,30,40);
console.log(arr);
const uniqArr = arr.uniq();
console.log(uniqArr);
const avg = arr.average();
console.log(avg);
/* 
let arr = [10,20,30,40,30,50,50,30,15,10];
Array.prototype.average=function(){
    return this.reduce((a,b)=>a+b,0)/this.length;
}
Array.prototype.uniq=function(){
    return [...new Set(this)];
}


//중복제거 함수
arr = arr.uniq()
console.log(arr);
//평균값 함수
const avg = arr.average();

console.log(avg);

 */

/* 
uniq(arr);
average(arr);
function uniq(a){
    return [...new Set(a)]
}
    function average(a){
    return a.reduce((a,b)=>a+b)/a.length;
    }

*/