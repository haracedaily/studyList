function solution(n, works) {
    let total = works.reduce((a, b) => a + b, 0);
    if (total <= n) return 0;
    works.sort((a, b) => b - a);
    for (let i = 0; i < n; i++) {
        // works[0]-=1;
        let res = works[0]-works[1];
        if(res<=n&&res>0){
            works[0]-=res;
            i+=res-1;
            console.log(res);
            console.log(works[0]);
            console.log(`i = ${i}`);
        }else{
            works[0]-=1;
        }
        if(works[0]<=works[1]){
            let idx=works.findIndex(el=>el>works[0]);
            //let j=[...works].slice(0,idx+1).sort((a,b)=>b-a);
            if(idx>0){
            let j = works.splice(0,idx);
                works.splice(1,0,...j);
            //works.splice(0,idx+1,...j);
            }
        }
    }
    return works.reduce((sum, work) => sum + work **2, 0);
}

console.log(solution(4,[4, 3, 3]));