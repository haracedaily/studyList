const circle1 = {
    radius:5,
    getDiameter(){
        return 2* this.radius;
    }
}
const circle2 = {
    radius:10,
    getDiameter(){
        return 2* this.radius;
    }
}

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());


//ex07.js
function Circle1(radius){
    console.log(radius);
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius
    }
};

const circle3 = new Circle1(20); //생성자함수 통할 경우 묵시적으로 객체를 리턴함.
console.log(circle3.getDiameter());
const circle4 = Circle1(10);//함수에 리턴값이 없으므로 정의되지 않음
console.log(circle4);
console.log(circle3);