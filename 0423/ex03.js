const timerId = setTimeout((name)=>console.log(name),1000,"hello");

clearTimeout(timerId); // cancel the timer