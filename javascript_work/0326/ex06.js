const arr = [1,2,3,4,5,6];
const test = arr.filter((item)=>item>3);
console.log(test);

console.log(arr.find(el=>el>6)?.length>0);
console.log(arr.findIndex(el=>el>3));

//indexof 인덱스 번호를 찾아서 splice 삭제하는 것보다

const review = [
    {uid:'123123123',title:'abcd',content:""},
    {uid:'123123123',title:'aaaa'},
    {uid:'123123123',title:'title'}
]

const filterReview = review.filter(el=>{
    console.log(`el = ${JSON.stringify(el)}`)
    return el.title.includes('a')});

console.log(filterReview);