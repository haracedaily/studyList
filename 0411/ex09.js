function doA({content,completed}){
    console.log(content);
    console.log(completed);
    console.log(`오늘 할일인 ${content}는 ${completed?'완료':'미완료'}입니다.`);
}

const todo = {id:1,content:"HTML",completed:false};

doA(todo);