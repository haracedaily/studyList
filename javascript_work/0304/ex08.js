function printArr(arr,callback){
    console.log(arr);
    console.log(callback);
}

printArr([1,2,3],function(){});

function solution(A, B) {
    if(A==B){
        return 0;
    }
    if((B+B).indexOf(A)<0){
        return -1;
    }
    console.log(B.length-(B+B).indexOf(A));
    console.log((B+B).indexOf(A));
    return B.length-(B+B).indexOf(A)>(B+B).indexOf(A)?(B+B).indexOf(A):B.length-(B+B).indexOf(A);
}
console.log(solution("abcdefga","defgaabc"));