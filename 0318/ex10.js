class Student{
    학교이름="ㅁㄴㅇㄹ";
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
    static doA(){
        console.log("정적메서드");
    }
    doB(age){
        this.age = age;
    }
}
let stu = new Student("홍길동",1);
Student.doA();
// stu.doA(); 정적메서드은 prototype으로 넘겨받지 못함.
stu.doB(30);
console.log(stu);