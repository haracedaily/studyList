let i = 2;
let j = 1;
while (i<5){
    j=1;
    while(j<6){
        if(j%2!=0) {
            console.log(`[${i},${j}]`);
        }
        j++;
    }
    i++;
}