const a = "abcdef";
const b = a.indexOf("c");
console.log(b);

function solution(str1,str2){
    const test = str1.indexOf(str2);
    if(test==-1){
        return 1;
    }else{
        return 2;
    }
}
const res = solution("ab6cde443fgh22ijklmnopqrst",'6cd');
console.log(res);