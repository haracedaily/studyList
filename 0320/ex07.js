//상속관계
//부모 자식 클래스

class Phone{
    constructor( number,brand ){
        this.number = number;
        this.brand = brand;
        console.log(this instanceof SmartPhone);
        console.log(this);

    }
    get Number(){
        return `this.number = ${this.number}`;
    }

    get Brand(){
        return `this.brand = ${this.brand}`;
    }

    get info(){
        return `this.brand = ${this.brand+" this.number = "+this.number}`
    }
}

class SmartPhone extends Phone{
    constructor(number,brand,internet){
        super(number,brand);
        this.internet = internet;
        console.log(this);
    }
    get info(){
        return super.info + ` this.internet = ${this.internet}`;
    }
}

const phone = new Phone("010-4321-4321","LG");
const smartPhone = new SmartPhone("010-1234-1234","삼성",true);

console.log(phone);
console.log(smartPhone);
console.log(smartPhone.info);

console.log(Object.getPrototypeOf(phone));//object
console.log(Object.getPrototypeOf(smartPhone));//class Phone => object
