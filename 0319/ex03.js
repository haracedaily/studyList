class Post{
    constructor(title,content){
        this.title=title;
        this.content=content;
    }
    sayHi(){
        console.log(`this.title ${this.title} this.content ${this.content}`);
    }
    static doA(){
        console.log(`this.title ${this.title} this.content ${this.content}`);
    }
}

const post = new Post("제목제목","내용내용");
console.log(post);

//Post.sayHi()
//post.doA()
post.sayHi();
Post.doA();