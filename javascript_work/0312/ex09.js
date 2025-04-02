//콜백함수
// setTime 함수와 시간
// 시간 지나서 함수 실행

//콜백
//addEventListener('click',function(){})

const obj = {
    value:100,
    foo(){
        const that = this;
        console.log(this.value);
setTimeout(function(){
    console.log("콜백함수")
    console.log(this);
    console.log(this.value);
    // console.log(that);
    // console.log(that.value);
}.bind(this),2000);
    }
}

obj.foo();