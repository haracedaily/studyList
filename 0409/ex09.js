function doA(){
    console.log(arguments);
    //arguments
    for (const element of arguments) {
        console.log(element);
    }
}

doA(10,20,30,40,50);