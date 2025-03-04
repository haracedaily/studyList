var a= '힣';

var b = a?.value??(a.value='lazy');

console.log(b);
console.log(a.value);//형변환이 일어나지 않음 attribute 받아줄 수 있는 형인 경우 사용 가능

var a;
    //= {value : "value"};

var b = a.value;

console.log(b);