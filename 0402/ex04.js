const str = 'is this all ok Is?';

const re = /is/ig;
//i는 대소문자 무시
console.log(re.test(str));
console.log(re.exec(str));
console.log(str.match(re));

const aa = 'a1b2c3d4e5';
console.log(aa.split(/\d/));
console.log(aa.search(/[0-9]/));