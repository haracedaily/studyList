function camelToSnake(str){
    // console.log(str);
    // console.log(str.match(/.[A-Z]/));
    // console.log(/.[A-Z]/.exec(str));
    //replace 두가지 방식
    //1.replace(aa,bb);
    //2.replace(aa,(aa)=>{});
return str.replace(/.[A-Z]/,match=>{
        // console.log(match);
        return match[0]+'_'+match[1].toLowerCase();
    })
}

console.log(camelToSnake('helloWorld'));

function snakeToCamel(snakeCase){
    return snakeCase.replace(/_./g,match=>{
        return match[1].toUpperCase();
    })
}

console.log(snakeToCamel(camelToSnake('helloWorld')));
console.log(snakeToCamel('a_b_c_d'));