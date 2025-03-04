function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    }
}
console.log(Circle.__proto__);
console.log(Circle.prototype);

const circle1=new Circle(5);
const circle2=new Circle(10);

console.log(circle1.__proto__);
console.log(circle2.__proto__);
console.log(circle1.getDiameter());
console.log(circle2.getDiameter());


