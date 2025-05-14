import React, {useEffect, useState} from 'react';
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {Button} from "antd";
import Reviews from "../components/Reviews.jsx";
import AirTable from "../components/AirTable.jsx";
import {fetchApi, fetchCities} from "../../api/supadb.js";

function RootPage(props) {
    const [cities,setCities] = useState([]);
    const [aqiInfo,setAqiInfo]=useState({});
    const [city,setCity] = useState(null);
    useEffect(() => {
        fetchCities().then(res => {
            setCities(res);
        });
    }, []);
    useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_API_KEY,
        libraries: ["clusterer", "drawing", "services"],
    });
    const getApi = async(city)=> {
        fetchApi(city.latitude, city.longitude).then(res => {
            setAqiInfo(res);

        })
    }

    return (
        <div>
            <Map center={{lat: 35.8296, lng:128.5328}} level={8}
                 style={{width:'100%',height:'50vh'}}>

                {cities.map((city)=>{
                    return <MapMarker key={city.id} position={{lat:city.latitude,lng:city.longitude}}
                                      image={{src:"/bus.png",
                                          size: {
                                              width: 64,
                                              height: 69,
                                          }, // 마커이미지의 크기입니다
                                          options: {
                                              offset: {
                                                  x: 27,
                                                  y: 69,
                                              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                                          },
                                      }}
                                      onClick={()=> {
                                          getApi(city);
                                          setCity(city);
                                      }}>
                    </MapMarker>
                })}
            </Map>
            <Reviews city={city} aqi={aqiInfo.aqi}/>
            {/*{ AirTable(aqiInfo)}*/}
            <AirTable {...aqiInfo} />
        </div>
    );
}

export default RootPage;