import React from 'react';

function Person(props) {
    console.log(props);
    const myStyle={position:"absolute",zIndex:100,backgroundColor:"#fff",width:"200px"};
    if(props.position==='right'){
        myStyle.right="0";
    }else if(props.position==='bottom'){
        myStyle.bottom="0";
    }
    console.log(myStyle);
    return (
        <>
        <div style={myStyle}>
            <h2>name = {props.name}</h2>
            <h2>age = {props.age}</h2>
        </div>
        </>
    );
}

export default Person;