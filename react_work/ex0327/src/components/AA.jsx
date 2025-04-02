import React from 'react'

export default function AA(props) {
    console.log(props.aa)
    console.log(props.bb)
    let aa = props.aa;
    aa=30;

    console.log('AA 렌더링 됨');
  return (
    <>
    <div>AA</div>
    <h1>props.aa = {props.aa}</h1>
    <h1>props.bb = {props.bb}</h1>
    <h1>aa= {aa}</h1>
    </>
  )
}
