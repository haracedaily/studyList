function can_transport_in_time(mid, a, b, g, s, w, t){
    let [total_gold, total_silver, total_combined] = [0, 0, 0];

    for( let i =0;i<g.length;i++){ 
       let max_trips = mid / (2 * t[i])
       let remainder_trip = (mid / t[i]) % 2

      let  max_gold = Math.min(g[i], (max_trips * w[i]) + (remainder_trip * w[i]))
       let max_silver = Math.min(s[i], (max_trips * w[i]) + (remainder_trip * w[i]))
        let max_combined = Math.min(g[i] + s[i], (max_trips * w[i]) + (remainder_trip * w[i]))

        total_gold += max_gold
        total_silver += max_silver
        total_combined += max_combined
        }
    return total_gold >= a && total_silver >= b && total_combined >= (a + b);
        }
function solution(a, b, g, s, w, t){
    let [left, right] = [0, 1e9];
    answer = right;
    while (left < right){
        let mid = (left + right) / 2
        if( can_transport_in_time(mid, a, b, g, s, w, t)){
            right = mid;
            answer = Math.min(answer,right);
        }
        else{
            left = mid + 1
        }
    }
    return answer;
}
console.log(solution(	10, 10, [100], [100], [7], [10]));
console.log(solution(90	,500	,[70,70,0]	,[0,0,500]	,[100,100,2]	,[4,8,1]	,499))
