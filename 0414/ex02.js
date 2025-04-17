function* gen() {
    yield 1; // next 함수 선언시 -> 여기까지 반환 하겠다
    yield 2;
  }
  
  const it = gen(); // 이터레이터
  
  console.log(it.next()); // { value: 1, done: false }
  for (const v of it) {
    console.log(v); // 2
  }