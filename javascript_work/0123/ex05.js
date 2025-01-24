var 이름 = '박명회'
console.log(이름);


var answer = 0;
var babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
babbling.some(x=>{
    x=x.replace("aya",'1');
    x=x.replace("ye",'1');
    x=x.replace("woo",'1');
    x=x.replace("ma",'1');
    x=x.replaceAll("1",'');
    console.log('x값 : '+x);
    console.log(x.length);
    if(x.length==0){
        answer++;
    }
})
                 
console.log('결과 : '+answer)