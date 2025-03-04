function add(x,y){
    if(typeof x!=='number'){
        //throw new TypeError("모든 인수는 숫자여야합니다.");
        x=0;
    }
    if(typeof y!=='number'){
        y=0;
    }
    console.log(arguments);
}

add(5,10,20,30,40);
add('a','b');