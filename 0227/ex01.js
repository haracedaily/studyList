class Gathers{
    constructor(){
        this.a='a',
        this.e='e',
        this.i='i',
        this.o='o',
        this.u='u'
    }
}
let gather_group = new Gathers();
//정규식 
// function solution(my_string) {
//     return my_string.replace(/[aieou]/gi,'');
// }

//클래스 활용
// function solution(my_string) {
//     return my_string.split("").filter(el=>!gather_group[el]).join("");
// }

console.log(solution("nice to meet you"));