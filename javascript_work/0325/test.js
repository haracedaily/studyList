let solution = (s) => s.split(" ").sort((a,b)=>a-b)[0]+" "+s.split(" ").sort((a,b)=>b-a)[0];

console.log(solution("1 2 3 4"));