fetch('http://localhost:5000/todos/3').then(response => response.json())
.then(data => console.log(data));