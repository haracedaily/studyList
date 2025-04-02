class AA{
    constructor(prefix){
        this.prefix = prefix;
        this.list = [];
    }

    add(arr){
        return arr.map(function(el){
            console.log(this);
            console.log(this.prefix);
            this.list.push(this.prefix+el);
            return this.prefix + el;
        },this)//bind하려면 }.bind(this))
    }
    remove(item){
        return this.list = this.list.filter(el=>el!=item);
    }

}

const me = new AA('webkit-');

let me1=me.add(['transition','user-select']);
console.log(me.list);
console.log(me1);
let me2=me.remove('webkit-transition');
console.log(me.list);
console.log(me2);