const s1 = Symbol.for('aa');

console.log(Symbol.keyFor(s1));

const s2 = Symbol(2);
console.log(Symbol.keyFor(s2));

const gender={
    '1':'Male',
    '2':'FeMale'
};
console.log(gender[1]);
//enum으로 사용한다 => 자바스크립트에서만 없어서 symbol로 갈음..
const direction = {
    up:Symbol('up'),
    down:Symbol('down'),
    left:Symbol('left'),
    right:Symbol('right')
}
const mydirection = direction.up;
console.log(mydirection.description);