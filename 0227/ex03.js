//new.target == 예약어


function aa(){
    // console.log(this);
    console.log(new.target);
}

//일반함수 호출일때는 전역객체가 this ::  window global
aa();
console.log('----------------------')
//new 생성시 this=={}객체 임
new aa();
