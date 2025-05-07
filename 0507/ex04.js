console.log("일반함수");
const a = {
    name:"zero",
    friend : ["nore",'hero','xero'],
    logFriend : function(){
        var that = this;
        console.log(this.friend);
        this.friend.forEach(function(e){
            console.log(that.name,e)
            console.log(this);//function => global , arrowfunc => this
        });
    },

};

console.log("화살표 함수");
const b = {
    name:"zero",
    friend: ["nore",'hero','xero'],
    logFriend(){
        (()=>{
            this.friend.forEach(e=>console.log(e));
        })();
    }
}

a.logFriend();
b.logFriend();
