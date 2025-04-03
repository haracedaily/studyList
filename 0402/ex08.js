const str = 'abcde#123/qwer';

console.log(str.replace(/[\W]/,''));
console.log(str.replace(/[^A-Za-z0-9]/,''));
