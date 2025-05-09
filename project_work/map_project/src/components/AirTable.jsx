import React, {useEffect} from 'react';
import {Card, Space, Table} from "antd";

function AirTable(props) {
    const [data, setData] = React.useState(props);

    useEffect(() => {
        console.log("AirTable useEffect");
        setData(props);
    },[props]);
    try{
        const {aqi,city:{geo},iaqi:{co,no2,o3,pm10,pm25,so2}} = props;
        console.log(aqi);
        console.log(geo);
        console.log("일산화탄소:", co.v);
        console.log("이산화질소:", no2.v);
        console.log("오존",o3.v);
        console.log("미세먼지:", pm10.v);
        console.log("초미세먼지:", pm25.v);
        console.log("아황산가스:", so2.v);
    }catch(e){
        console.log(e);
    }
    const dataSource = [
        {
            key: '1',
            aqi: '0~50',
            grade: '좋음',
            mean: '공기가 깨끗',
            remark:"누구나 활동가능"
        },

    ];

    const columns = [
        {
            title: 'Aqi',
            dataIndex: 'aqi',
            key: 'aqi',
        },
        {
            title: '등급',
            dataIndex: 'grade',
            key: 'grade',
        },
        {
            title: '의미',
            dataIndex: 'mean',
            key: 'mean',
        },
        {
            title: '비고',
            dataIndex: 'remark',
            key: 'remark',
        },

    ];


    return (
        <>
            {!!props?.aqi?<Space>
                <Card>
                    <h1>대기질 정보 : {props?.aqi}</h1>
                    <Table dataSource={dataSource} columns={columns} pagination={false} />
                        <h2>일산화탄소 : {props?.iaqi?.co?.v}</h2>
                        <h2>이산화질소 : {props?.iaqi?.no2?.v}</h2>
                        <h2>오존 : {props?.iaqi?.o3?.v}</h2>
                        <h2>미세먼지 : {props?.iaqi?.pm10?.v}</h2>
                        <h2>초미세먼지 : {props?.iaqi?.pm25?.v}</h2>
                        <h2>아황산가스 : {props?.iaqi?.so2?.v}</h2>
                </Card>
            </Space>:<></>}

        </>
    );
}

export default AirTable;