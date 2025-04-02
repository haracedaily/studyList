function solution(friends, gifts) {
    var answer = 0;
    //선물지수
    let a = friends.map(el=>gifts.map(ele=>ele.split(' ')).filter(ele=>ele[0]==el||ele[1]==el).reduce((a,b,i)=>{
        b[0]==el?a[0]+=1:a[1]+=1;
                       return a;                                                                                        },[0,0]));
    console.log("선물지수 준선물-받은선물");
    console.log(a);
    //준 선물
    let c=friends.map(el=>[el,[...gifts.map(ele=>ele.split(' ')).filter(ele=> ele[0]==el).map(ele=>ele[1]).sort().reduce((a,b)=>{
        !a.get(b)?a.set(b,1):a.set(b,a.get(b)+1);
        return a;
    },new Map())]]);
    console.log("준 선물 누구에게 몇개");
    console.log(c.flat());
    //받은 선물
    let d=friends.map(el=>[el,[...gifts.map(ele=>ele.split(' ')).filter(ele=> ele[1]==el).map(ele=>ele[0]).sort().reduce((a,b)=>{
        !a.get(b)?a.set(b,1):a.set(b,a.get(b)+1);
        return a;
    },new Map())]]);
    console.log("받은 선물 누가 몇개")
    console.log(d.flat());
    
    return ;
    // c.map(el=>{
    //    return el[1].map(ele=>{
    //        return [...c].filter(e=>e[0]==ele[0]&&[...e[1].filter(e2=>e2[0]==el[0])].length).flat();
    //     })
    // });
}
// 시간 복잡도 너무 올라가는데 좀 줄이려면

// 받는 선물 수량

// 주고 받은 수량 동일 시 선물 지수 높은 사람
// 주고 받지 않았을때 선물지수 최대값 사람
// 선물을 상호 줬을때 더 많이 준 사람