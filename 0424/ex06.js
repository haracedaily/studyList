const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://dummyjson.com/todos', true);

xhr.send();

xhr.onreadystatechange = function() {
    console.log('readyState값 변경될때마다 호출됨', xhr.readyState);
    if (xhr.readyState === 4) {
        console.log('요청 완료됨', xhr.status);
        if (xhr.status === 200) {
            console.log('응답 성공', xhr.responseText);
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.error('응답 실패', xhr.statusText);
        }
    }
}