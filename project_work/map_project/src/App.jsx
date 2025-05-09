import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {Card, message, Space} from "antd";
import {fetchApi, fetchCities} from "../api/supadb.js";
import AirTable from "./components/AirTable.jsx";
function App() {
    const [cities,setCities] = useState([
        {id:0,lat:35.8296,lng:128.5328},
        {id:1,lat:35.8693,lng:128.6062},
        {id:2,lat:35.8467,lng:128.5971}
    ])
    const [aqiInfo,setAqiInfo]=useState({});

    useEffect(() => {
        fetchCities().then(res => {
            console.log(res);
            setCities(res);
        });
    }, []);
    useKakaoLoader({
        appkey: '778536d42c75afed51507c49fef4b2b9',
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
  return (
    <>
      <Map center={{lat: 35.8296, lng:128.5328}} level={8}
      style={{width:'100%',height:'80vh'}}>
          {cities.map((city)=>{
          return <MapMarker key={city.id} position={{lat:city.latitude,lng:city.longitude}}
                     onClick={()=>getApi(city)}>
          </MapMarker>
          })}


      </Map>
        <AirTable aqiInfo={aqiInfo}/>

    </>
  )
}

export default App
