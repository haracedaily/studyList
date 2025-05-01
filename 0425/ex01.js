function aa(){
    return new Promise(function(){
        return 'test';
    });
}

async function bb(){
    return ('test');
}

console.log(aa());
console.log(bb());

const baa = await bb();
console.log(baa);
