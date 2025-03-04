const people = [];

//filter, map

const result1 = people.filter(item=>{
    console.log(item);
    return item.name.includes("강동");
});
console.log(result1);
const result2 = result1.map(item=>{
    return `<li>name=${item.name}</li>
<li>age=${item.age}</li>`;
}).join(" ");

console.log(result2);

const result3=
    people.filter(item=>item.name.includes("길동")).map(item=> `<li>name=${item.name}</li>
<li>age=${item.age}</li>`).join(" ");

console.log(result3);