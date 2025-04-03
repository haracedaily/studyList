function solution(s){
    //\d숫자
    //\s공백
    const re = /^[0-9]+$/;
    return re.test(s);
}
console.log(solution('1234'));
console.log(solution('12345678'));
console.log(solution('a1234'));