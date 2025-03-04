const x = 'global';

function foo(){
    const x = "local";
    console.log(x);

}
foo();

console.log(x);