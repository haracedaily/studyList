const arr = ['aa','bb','cc'];

//map webkit-aa webkit-bb webkit-cc

const result = arr.map(item=>{
    console.log(item);
    return `webkit-${item}`;
})

console.log(result);

class AA{
    constructor(pre){
        this.pre = pre;
    }
    add(arr){
        return arr.map(el=>this.pre+'-'+el);
    }
}

const aa = new AA('webkit');

let bb=aa.add(arr);
console.log(bb);