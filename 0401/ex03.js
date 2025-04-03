class AA{
    static MYT = 10;

    static doA(){
        console.log('doA');
    }
    doB(){
        console.log('doB');
    }
}

let aa = new AA();
console.log(aa.MYT);
console.log(AA.MYT);