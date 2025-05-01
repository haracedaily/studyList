let test = async() => await fetch('https://github.com/dron512/pwa/blob/main/test.html');
test = await fetch('https://github.com/dron512/pwa/blob/main/test.html')
console.log("이것도 되나");
// console.log(test().then(res => console.log(res)));
console.log(await test.text());
// console.log(test.then(res => res));
function doA(){
    return 'test';
}

console.log(doA());