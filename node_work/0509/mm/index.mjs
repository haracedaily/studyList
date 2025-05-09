import AA,{aa,bb,ccFunc} from './var.mjs';

/* console.log("import구문 전역 안으로 내려감"); 사용불가
사용하려면 import(경로);
로 함수형태로 사용은 가능
if(true){
    import QWER,{aa,bb,ccFunc} from "./var.mjs";
} */
console.log('aa : ',aa);
console.log('bb : ',bb);
console.log('ccFunc : ',ccFunc);
ccFunc();
console.log(AA);
console.log('실행');

/* import.meta.url 같은 형태로 가져온다. mjs에서는 __dirname,__filename사용 불가능 */