function solution(n) {

    return thirdFactory(n);
}

function thirdFactory(num){
    let num2=parseInt(num/3);
    num = num+num2;
    console.log(`num2 = ${num2}`);
    console.log(`num = ${num}`);
    // if(parseInt(num/3)>num2||String(num).includes(3)){
    //     return thirdFactory(num);
    // }
    
    return num;
    
}

solution(15);