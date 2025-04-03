var value = 1;

const obj = {
    value:10,
    foo(){
        console.log(`this = ${JSON.stringify(this)}`);
        console.log(`this.value = ${this.value}`);
        function bar(){
            console.log(this.value);
        }
        bar();
    }
}
obj.foo();