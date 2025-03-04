var a = 10;
/*for( ; ; ){
    a++;
    console.log("1 "+a);
    if( a == 20 ){
        break;
    }
}*/

while(true){
    a++;
    if( a == 15){
        continue;
    }
    console.log("1 "+a);
    if( a == 30 ){
        break;
    }
}