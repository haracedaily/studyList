import React, { useMemo, useState } from 'react'
import Header from '@/layout/Header'

export default function Calcu() {
    const [hardNum, setHardNum] = useState(1);
    const [easyNum, setEasyNum] = useState(1);
    const hardCaclcu = (num)=>{
        console.time('hard');
        for (let i=0; i<1_000_000_000; i++){
            num+=i;
        }
        console.log('오래걸리는 계산');
        console.timeEnd('hard');
        return num;
    }
    const hardSum = useMemo(()=>{
        return hardCaclcu(hardNum);
    },[hardNum]);
  return (
    <div>
        <Header></Header>
        <h1>Calcu</h1>
        <div style={{border:'1px solid black'}}>

        <p>hardCalcu = {hardNum}</p>
        <button onClick={()=>{setHardNum(hardNum+10)}}>어려운 수치 증가</button>
        </div>
        <div style={{border:'1px solid black'}}>
        <p>hardCalcu = {easyNum}</p>
        <button onClick={()=>{setEasyNum(easyNum+5)}}>쉬운 숫자 증가</button>
        </div>
    </div>
  )
}
