//배열, 맵, 셋은 symbol.iterator =>for of
//이외 객체, 함수 등은 for in

const iter = {
    aa(){},
    // 규칙 well known symbol
    [Symbol.iterator](a=6){
        let cur = 0;
        return {
            next(){
                return {value:cur++, done:cur>a};
            }
        }
    }
}

for (const element of iter) {
    console.log(element);
}


const 이터레이터 = iter[Symbol.iterator](10);


console.log(...iter);
const [a,b,c,d,e,f] = iter;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
