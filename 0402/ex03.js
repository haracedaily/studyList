
const tel = '02-1234-5678';

const regExp = /^\d{2,3}-\d{4}-\d{4}$/;
console.log(regExp.test(tel));
console.log(regExp.exec(tel));
