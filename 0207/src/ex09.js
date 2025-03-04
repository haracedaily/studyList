var a = "문자열";

if(typeof a === "number") {
    if (a > 0) {
        console.log("a는 0보다 크다")
    } else if (a < 0) {
        console.log("a는 0보다 작다");
    } else {
        console.log("a는 0 이다");
    }
}else{
    console.log("a는 숫자가 아니다.");
}