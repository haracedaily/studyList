const sorted = (a,b)=>{
    if(a>b){
        return 1;
    }else if(a==b){
        return 0;
    }else{
        return -1;
    }
}

const arr = [1,2,7,4,5,6,10];

console.log(arr.sort(sorted));

const brr = ['aa','cc','bb'];
console.log(brr.sort());

//sort 함수 규칙
// sort 안에 고차 함수 넣을때
//a,b 파라메타를 받아와서
//a>b 양수 리턴
//a==b 0 리턴
//a<b 음수 리턴