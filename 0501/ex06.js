async function foo(){
    try{

        const result = await fetch("https://09e0571f1a52874cde2b14.mockapi.io/todos/1");
        const body = await result.json();
        
        console.log(body);
    }catch(e){
        console.error(e);
    }
    console.log("함수 종료");
}
foo();
console.log("종료되었습니다.");