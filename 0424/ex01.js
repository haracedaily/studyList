const loadash = require("lodash");

const {debounce,throttle} = loadash;

const aa = debounce(()=>{
    console.log("debounce");
},300);

const bb = throttle(()=>{
    console.log("throttle");
},300);

bb();
bb();
bb();
bb();
bb();
aa();
aa();
aa();
aa();
aa();
aa();
