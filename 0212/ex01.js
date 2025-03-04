function solution(numbers) {
    var max_one = numbers[0];
    var max_two = numbers[1];
    for (var i = 0; i < numbers.length + 1; i++) {
        if (max_one < numbers[i]) {
            max_two = max_one;
            max_one = numbers[i];
        }
        if (max_two < numbers[i] && max_one > numbers[i]) {
            max_two = numbers[i];
        }
    }
    console.log(`max_one: ${max_one}`);
    console.log(`max_two: ${max_two}`);
    return max_one * max_two;
}
console.log(solution([300,110,50,300,150]));