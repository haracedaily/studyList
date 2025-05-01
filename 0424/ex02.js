// stack flow => lifo

async function doA(){
    console.log("A");
    for(let i=0; i<1000000000; i++){
    }
    console.log("A end");
}

function doB(){
    console.log("B");
    
}
console.log("start");
doA();
doB();
console.log("end");