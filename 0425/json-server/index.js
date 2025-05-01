console.log('index');

function selectTodo() {
    fetch('http://localhost:5000/todos').then(response => response.json())
    .then(data => console.log(data));
    }

    selectTodo();
let data = {
  "id": "7",
  "title": "Todo 1",
  "completed": false
}

  fetch('http://localhost:5000/todos',{method:"post",body:JSON.stringify(data)}).then(response => response.json())
  .then(data => {console.log('post결과:'+data);selectTodo();});
