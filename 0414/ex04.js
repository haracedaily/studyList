const obj = {a:10,b:20};
console.log(obj);


const {a,b} = obj;
console.log(a);
console.log(b);

fetch('https://dummyjson.com/todos')
.then(data=>data.json())
.then(result=>{
    const {todos}=result;
    const {todo} = todos[0];
    let res = todos.find(el=>el.id==1);
    console.log(res.todo);
    console.log(todo);
})