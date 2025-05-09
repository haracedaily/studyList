const ex = require('./ex');//index를 기본으로 가져옴
console.log(ex);

console.log(require);

/* 
1. 파일을 가지고 올때 require('파일명')
    안에 있는 내용 실행하고 exports, this를 가지고 온다.

2. 디렉토리를 가지고 올때 require('디렉토리명')
    디렉토리의 index파일을 찾아서 가지고 온다.

3. 순환참조
    서로 참조 하는 경우 한번 실행 후 빈객체로 처리해서 실행안되게 막음
*/
