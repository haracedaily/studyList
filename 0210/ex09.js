let i =0

abc:while(true){
    while(true){
        console.log(i);
        i++;
        if(i==3) break abc;
    }
}

console.log('for구문 시작');
i=0;
a:for(;;){
    i++;
    console.log(i);
    if(i==4)break a;
}