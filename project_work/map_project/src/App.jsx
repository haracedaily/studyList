import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {Card, message, Space} from "antd";
import {fetchApi, fetchCities} from "../api/supadb.js";
import AirTable from "./components/AirTable.jsx";
import {Bar, Line, Pie} from "@ant-design/plots";
import { Column } from '@ant-design/plots';
import ReactDOM from 'react-dom';

function App() {
    const [cities,setCities] = useState([]);
    const [aqiInfo,setAqiInfo]=useState({});

    useEffect(() => {
        fetchCities().then(res => {
            console.log(res);
            setCities(res);
        });
    }, []);
    useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_API_KEY,
        libraries: ["clusterer", "drawing", "services"],
    });
  const getApi = async(city)=>{
      console.log(city);
      fetchApi(city.latitude,city.longitude).then(res=>{
          console.log(res);
          setAqiInfo(res);

      })
     /* try {
          const url = `https://api.waqi.info/feed/geo:${city.latitude};${city.longitude}/?token=${WAQI_API_KEY}`;
          const response = await fetch(url);
          const data = await response.json();

          if (data.status === "ok") {
              setAqiInfo({
                  cityName: city.name,
                  aqi: data.data.aqi,
                  pm10: data.data.iaqi.pm10?.v || "N/A",
                  pm25: data.data.iaqi.pm25?.v || "N/A",
                  no2: data.data.iaqi.no2?.v || "N/A",
                  so2: data.data.iaqi.so2?.v || "N/A",
                  co: data.data.iaqi.co?.v || "N/A",
                  o3: data.data.iaqi.o3?.v || "N/A",
              });
          }
      } catch (error) {
          console.error("API 호출 오류:", error);
      }*/
  }

  const config = {
      data : [
        {x:'2023-10-01', y: 50},
        {x:'2023-10-02', y: 80},
        {x:'2023-10-03', y: 10},
        {x:'2023-10-04', y: 30},
        {x:'2023-10-05', y: 150},
    ],
        xField:'x',
        yField:'y'
};



    const DemoDefaultTooltip = () => {
        const config = {
            data: [{"name":"London","月份":"Jan.","月均降雨量":18.9},{"name":"London","月份":"Feb.","月均降雨量":28.8},{"name":"London","月份":"Mar.","月均降雨量":39.3},{"name":"London","月份":"Apr.","月均降雨量":81.4},{"name":"London","月份":"May","月均降雨量":47},{"name":"London","月份":"Jun.","月均降雨量":20.3},{"name":"London","月份":"Jul.","月均降雨量":24},{"name":"London","月份":"Aug.","月均降雨量":35.6},{"name":"Berlin","月份":"Jan.","月均降雨量":12.4},{"name":"Berlin","月份":"Feb.","月均降雨量":23.2},{"name":"Berlin","月份":"Mar.","月均降雨量":34.5},{"name":"Berlin","月份":"Apr.","月均降雨量":99.7},{"name":"Berlin","月份":"May","月均降雨量":52.6},{"name":"Berlin","月份":"Jun.","月均降雨量":35.5},{"name":"Berlin","月份":"Jul.","月均降雨量":37.4},{"name":"Berlin","月份":"Aug.","月均降雨量":42.4}],
            xField: '月份',
            yField: '月均降雨量',
            colorField: 'name',
            group: true,
            style: {
                inset: 5,
            },
            onReady: ({ chart }) => {
                try {
                    chart.on('afterrender', () => {
                        chart.emit('legend:filter', {
                            data: { channel: 'color', values: ['London'] },
                        });
                    });
                } catch (e) {
                    console.error(e);
                }
            },
        };
        return <Column {...config} />;
    };


  return (
    <>
      <Map center={{lat: 35.8296, lng:128.5328}} level={8}
      style={{width:'100%',height:'50vh'}}>
          {cities.map((city)=>{
          return <MapMarker key={city.id} position={{lat:city.latitude,lng:city.longitude}}
                     onClick={()=>getApi(city)}>
          </MapMarker>
          })}
      </Map>
        {/*{ AirTable(aqiInfo)}*/}
        <AirTable {...aqiInfo} />
        {/*<Line {...config} />*/}
        <Line data={config.data} xField={config.xField} yField={config.yField} />
        <Bar data={config.data} xField={config.xField} yField={config.yField} />
        <Pie data={config.data} xField={config.xField} yField={config.yField} />
        <DemoDefaultTooltip/>
    </>
  )
}

export default App
