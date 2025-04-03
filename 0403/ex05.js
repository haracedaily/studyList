fetch('https://jsonplaceholder.typicode.com/comments')
.then(res=>{
    console.log(res);
    console.log(res.status);
    if(res.status.toString().startsWith('2')){
        console.log('정상');
        return res.json();
    }else{
        console.log('주소 잘못됐음.');
        throw new Error('에러입니다.');
    }
})
.then(data=>console.log(data))
.catch(err=>console.log(`${err} 에러`));