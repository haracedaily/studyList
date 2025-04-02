const todos = [
    {id:1,content:"HTML"},
    {id:4,content:"CSS"},
    {id:2,content:"JAVASCRIPT"},
    {id:3,content:"REACT"}
]

let a = [...todos].sort((a,b)=>a.id-b.id);
todos.sort((a,b)=>b.content[0].charCodeAt()-a.content[0].charCodeAt());
console.log(todos);
console.log(a);

function mysort(a,b){
    console.log(`a=${JSON.stringify(a)}`)
    console.log(`b=${JSON.stringify(b)}`)
    return a.id > b.id ? 1 : a.id<b.id? -1 : 0
}

todos.sort(mysort);
console.log(todos);
