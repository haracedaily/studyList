fetch('https://dummyjson.com/todos',{method: 'GET'})
    .then(res =>{
        return res.json();
    })
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
    })

    /* const axios = require('axios');

    axios.get('https://dummyjson.com/todos')
    .then(response => {
        // console.log(response);
        console.log('응답 성공 axios', response.data.todos);
    }) 
    
    get post put delete patch    
    각 방식
    get : 데이터 가져오기
    post : 데이터 추가하기
    put : 데이터 수정하기
    patch : 데이터 일부 수정하기
    delete : 데이터 삭제하기
    */