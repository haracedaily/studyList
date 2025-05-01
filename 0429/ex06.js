fetch("https://6809e0571f1a52874cde2b14.mockapi.io/todos")
.then((res)=>{
    return res.json();
}).then(result=>console.log(result)).catch((e)=>{
    console.log(e);
})