//constructor
const baz={
    x: function(){}
}
// new baz();
new baz.x();

//non-constructor
const a = () =>{};
a();
new a();
const baz2={
    x(){}
}

// new baz2();
new baz2.x();