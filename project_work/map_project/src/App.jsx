import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {message} from "antd";
function App() {
  const [count, setCount] = useState(0)
    const [cities,setCities] = useState([
        {id:0,lat:35.8296,lng:128.5328},
        {id:1,lat:35.8693,lng:128.6062},
        {id:2,lat:35.8467,lng:128.5971}
    ])
    useKakaoLoader({
        appkey: '778536d42c75afed51507c49fef4b2b9',
        libraries: ["clusterer", "drawing", "services"],
    });
  const getApi = async(city)=>{
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
  return (
    <>
      <Map center={{lat: 35.8296, lng:128.5328}} level={8}
      style={{width:'100%',height:'80vh'}}>
          {cities.map((city)=>{
          return <MapMarker position={{lat:city.lat,lng:city.lng}}
                     onClick={getApi}>
          </MapMarker>
          })}


      </Map>
    </>
  )
}

export default App
