function solution(a, b, g, s, w, t) {
    return reduceTrans(a,b,g,s,w,t);
}

function reduceTrans(a,b,g,s,w,t){
    let remainG=a;
    let remainS=b;
    let totalTime=Array(g.length).fill(0);
    g.reduce((a,b,idx)=>{
            while((b>0||s[idx])>0&&(remainG>0||remainS>0)){
                if(b>=w[idx]||s[idx]>=w[idx]){
                    if(b>=w[idx]){
                        b-=w[idx];
                remainG-=w[idx];
                if(remainG>0){
                    totalTime[idx]+=t[idx]*2;
                }
                    }else if(s[idx]>=w[idx]){
                        s[idx]-=w[idx];
                        remainS-=w[idx];
                        if(remainS>0){
                        totalTime[idx]+=t[idx]*2;
                        }else{
                            totalTime[idx]+=t[idx];
                        }
                    }
                }else if(b>0||s[idx]>0){
                    if(b+s[idx]<=w[idx]){
                        if(b>0){
                        remainG-=b;
                        remainS-=s[idx];
                        w[idx]-b>s[idx]?s[idx]=0:s[idx]-=w[idx]-b;
                        b-=b;
                        s[idx]-=w[idx]-b;
                        totalTime[idx]+=t[idx];
                        }
                    }else{
                        if(b>0){
                        remainG=0;
                        s[idx]-=w[idx]-b;
                        remainS-=w[idx]-b;
                        totalTime[idx]+=t[idx];
                        }
                    }
                }
            }
    },0)
    return Math.max(...totalTime);
}
console.log(solution(10,10,[100],[100],[7],[10]));
console.log(solution(90	,500	,[70,70,0],	[0,0,500]	,[100,100,2]	,[4,8,1]	));
//분할
/* 
필요 금 = a
필요 은 = b
보유 금 배열 = g
보유 은 배열 = s
이동가능한 양 배열 = w
편도 이동시간 배열 = t
금과 은 혼합 배송 가능
(자원 * 시간) / (트럭에 싣고 갈 무게)
 */
