fetch("https://jsonplaceholder.typicode.com/users/123")
.then((res)=>{
    if(res.status!=404)return res.json();
    else return '실패';
}).then(res=>console.log(res)).catch(error => console.error(error));


function promiseGet(url){
    fetch(url).then(res=>res.json()).then(res=>{
        let {userId} = res;
        promiseGeta("https://jsonplaceholder.typicode.com/users/"+userId);
    })
}

function promiseGeta(url){
    fetch(url).then(res=>res.json()).then(res=>console.log(res));
}

promiseGet("https://jsonplaceholder.typicode.com/posts/2");