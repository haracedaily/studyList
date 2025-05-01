let data = {
        "completed":true
  }

fetch('http://localhost:5000/todos/3',
    {
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }
)
    .then(response => response.json())
    .then(data => {console.log('put 결과:'+JSON.stringify(data));});
