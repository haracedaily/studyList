class test{
    constructor(a,b){
        this.a = a,
        this.b = b
    }
    getSum(){
        return this.a+this.b;
    }
}

const a = 10;
const b = 20;



main()
function main(){
    test.a = 10;
    test.b = 20;
    let test1 = new test(10,20);
    console.log(test1.getSum());
    console.log(test.a+test.b);
    
}

// 램 32기가
// 8bit -> 1byte
// 전기 흐름 0,1 흐르면 1 안흐르면 0
// 1024byte = 1kbyte
// 1024kbyte = 1mbyte
// 1024mbyte = 1gbyte
// 1024gbyte = 1tbyte
// 00010100 = 20
// moudler