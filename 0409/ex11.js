function formatMemory(bytes){
    return `${(bytes / 1024/1024).toFixed(2)}MB`
}

console.time('ary');
console.log('배열 기반');

const bigArr = Array.from({length:100_000_000},(_,i)=>i);
console.log(bigArr[bigArr.length-1]);
console.log(bigArr.length);

const arrMem=process.memoryUsage();

console.log(arrMem);
console.log(`배열 heapUsed: ${formatMemory(arrMem.heapUsed)}`);
console.log(`--------------------\n`);
console.timeEnd('ary');

console.time('iter');
console.log("이터러블기반")
const bigIterable = {
    [Symbol.iterator](){
        let i = 0;
        const max = 100_000_000;
        return{
            //next함수를 만났을때 메모리 사용
            next(){
                if(i<max)return{value:i++,done:false};
                else return{done:true};
            }
        }
    }
}

let last;
for (const x of bigIterable) last = x;
console.log(last); // 마지막 값 확인
//성능 개선 process.memoryUsage();
//console.time('aa');
//console.endtime('aa');
const iterMem = process.memoryUsage();
console.log(`이터러블 heapUsed: ${formatMemory(iterMem.heapUsed)}`);
console.log('---------------------------');
console.timeEnd('iter');