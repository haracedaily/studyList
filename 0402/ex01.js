const myset = new Set();
myset.add(1);
myset.add(1);
myset.add(2);
myset.add(5);

console.log(myset);
console.log(myset.size);
console.log([...myset]);

const lottoNum = new Set();
setInterval(()=>{

    do{
        lottoNum.add(parseInt(Math.random()*46)+1);
    }while(lottoNum.size<6);
    console.log(lottoNum);
    console.log([...lottoNum].sort((a,b)=>a-b));
    lottoNum.clear();
},1000);
    /* {

}
for (let i = 0; i < 6; i++) {
    
    
} */

let a = {"totSellamnt":81032551000,"returnValue":"success","drwNoDate":"2019-06-01","firstWinamnt":4872108844,"drwtNo6":25,"drwtNo4":21,"firstPrzwnerCo":4,"drwtNo5":22,"bnusNo":24,"firstAccumamnt":19488435376,"drwNo":861,"drwtNo2":17,"drwtNo3":19,"drwtNo1":11};
for (const key in a) {
    if (Object.prototype.hasOwnProperty.call(a, key)) {
        const element = a[key];
        console.log(key);
        console.log(element)
    }
}