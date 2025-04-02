// 1. continue break
// 1. 홀수만 출력

// 1~9까지 
for (let i = 1; i < 10; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    continue;
  }
  console.log(`i = ${i} 😂`); 
}