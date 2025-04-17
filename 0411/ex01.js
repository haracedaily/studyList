const obj1 = {aa:10,bb:20};
const obj2 = {aa:30,cc:40};

console.log({...obj2,...obj1,dd:50,bb:100});

const data = [
    {date:'2025/02/22', todo:'공부하기'},
    {date:'2025/02/23', tood:'놀기'}
]

console.log([...data,{date:'2025/02/24',todo:'영화보기'}]);