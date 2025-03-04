/* function solution(p, d) {
    console.log( p.sort().toString());
    d.some((a,b,c,d)=>{
        console.log([...a].sort().toString());
    })
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}

console.log(solution(["p", "o", "s"],["sod", "eocd", "qixm", "adio", "soo"]));
 */

function solution(board) {
    var answer = 0;
    //보드 크기 board.length*board[0].length;
    //지뢰 1주어짐 근처 3*3은 위험지역
    board.map((el, idx) => {
        [...el].map((ele, innerIdx) => {
            if (ele == 1) {
                if (innerIdx > 0) { if (board[idx][innerIdx - 1] != 1) board[idx][innerIdx - 1] = 'b'; }
                if (board[idx][innerIdx + 1] != 1) board[idx][innerIdx + 1] = 'b';
                if (idx > 0) {
                    if (innerIdx > 0) { if (board[idx - 1][innerIdx - 1] != 1) board[idx - 1][innerIdx - 1] = 'b'; }
                    if (board[idx - 1][innerIdx] != 1) board[idx - 1][innerIdx] = 'b';
                    if (innerIdx < board[0].length - 1) { if (board[idx - 1][innerIdx + 1] != 1) board[idx - 1][innerIdx + 1] = 'b'; }
                }
                if (idx < board.length - 1) {
                    if (innerIdx > 0) { if (board[idx + 1][innerIdx - 1] != 1) board[idx + 1][innerIdx - 1] = 'b'; }
                    if (board[idx + 1][innerIdx] != 1) board[idx + 1][innerIdx] = 'b';
                    if (innerIdx < board[0].length - 1) { if (board[idx + 1][innerIdx + 1] != 1) board[idx + 1][innerIdx + 1] = 'b'; }
                }
            }
        })
    });
    console.log(board.join("").replaceAll(",","").replaceAll("b","").replaceAll("1","").length);
    return answer;
}

solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]);

class numlist{
    constructor(){
        1=1,
        2=2,
        3=4,
        4=5,
        5=7,
        6=8,
7=10,
8=11,
9=14
10=16
11=17
12=19
13=20
14=22
15=25
16=26
17=28
18=29
19=40
20=41
21=44
22=46
23=47
24=49
25=50
26=52
27=55
28=56
29=58
30=59
31=61
32=62
33=64
34=65
35=67
36=68
37=70
38=71
39=74
40=76
41=77
42=79
43=80

    }
}