let data = {
        "todo":"야구..?",
        "completed":false,
        "id":'8'
  }

fetch('http://localhost:5000/todos',
    {
        method:"post",
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }
)
    .then(response => response.json())
    .then(data => {console.log('post결과:'+JSON.stringify(data));});
