function solution(dot) {
  const [x, y] = dot;
  var answer = 0;

  if (x > 0 && y > 0) {
    answer = 1;
  } else if (x < 0 && y > 0) {
    answer = 2;
  } else if (x < 0 && y < 0) {
    answer = 3;
  } else if (x > 0 && y < 0) {
    answer = 4;
  }
  return answer;
}

console.log(function([-7,9]));