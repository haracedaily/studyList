new Error("에러 생성"); // 에러 객체를 생성만 했을 때는 예외 이벤트 실행x

try{

    throw new Error("에러생성");//여기서 강제 종료
}catch(e){
    console.log(e);
}
console.log("종료되었습니다");