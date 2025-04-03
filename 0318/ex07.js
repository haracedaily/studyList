// console.log(Car); 클래스는 호이스팅이 일어나지 않는 것처럼 작동한다.
// var Car = ''
// console.log(Car);

class Car {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    drive(){
        console.log(`${this.name + this.type}`);
    }
    static sayHello(){
        //정적메서드
        console.log('정적메서드');
    }
    sayhi(){
        //프로토타입 메서드
        console.log('hi');
    }
}

const car = new Car("K5","하이브리드");
console.log(car);
car.drive();

// car.sayHello();생성된 참조 변수로 정적메서드의 호출이 불가능
Car.sayHello();