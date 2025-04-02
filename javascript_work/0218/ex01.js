function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  
  //1/2 + 3/4 = 4/8 + 6/8 = 10/8 = 5/4 => 5, 4

  let numer;
  let denom;

  numer = numer1 * denom2 + numer2 * denom1;
  denom = denom1 * denom2;


  // 40/16 => 20/8 => 10/4 => 5/2
  for (let i = 2; i <= numer; i++) {
    if (numer % i === 0 && denom % i === 0) {
      numer /= i;
      denom /= i;
      i--;  // 같은 인수로 또 나눠질 수 있기 때문
    }
  }

  answer.push(numer);
  answer.push(denom);
  return answer;
}

console.log(solution(1, 2, 3, 4));