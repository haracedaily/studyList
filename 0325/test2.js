function solution(s) {
    return s.toLowerCase().split(" ").map(el=>{
        if(el.length>0){
        el = el.split("");
        el[0]=el[0].toUpperCase();
        return el.join("")
        }
    }).join(" ");
}


console.log(solution("3people unFollowed   me"));