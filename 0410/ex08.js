// 객체 배열 참조타입이라서
// 참조하는 거 여러개 복사
const obj = {a:10,b:20};
const copy = obj;


//react -> useMemo();
//useCallBack();

//원시는 복사됨
obj.a = 30;
console.log(obj);
console.log(copy);