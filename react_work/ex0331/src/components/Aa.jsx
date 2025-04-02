import React, {useEffect} from 'react';

function Aa(props) {
    let count = 1;
    useEffect(()=>{
        console.log('Aa호출');
        const myInterval = setInterval(()=>{
            console.log(`count = ${count++}`);
        },1000);
        return () => {clearInterval(myInterval);};
    },[])
    return (
        <h1>Aa 컴포넌트</h1>
    );
}

export default Aa;