/* 
1. 표준 빌트인 객체
Array, String, Boolean, Math

2. 호스트 객체
브라우저 - document
node - process

3. 사용자 정의객체
개발자가 직접 만드는 객체
*/

// console.log(process);
// console.log(document);
// console.log(XMLHttpRequest);
console.log(fetch);
fetch('https://cjo3o.github.io/p2-jim/header.html').then(response=>
    response.text()).then(data=>{
    console.log(data);
})