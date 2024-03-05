import { Loader } from '@googlemaps/js-api-loader';
import { useState } from 'react';
import Places from './Places';

declare global {
    interface Window {
        google: any;
    }
}

export default function HotPlace({
    city,
    hotPlaceImgs
}: {
    city: any;
    hotPlaceImgs: any;
}) {
    const [latMid, setLatMid] = useState(0);
    const [lngMid, setLngMid] = useState(0);
    // 환경변수에서 Map Key 가져옴
    const mapKey: string | undefined = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;
    const apiOptions: any = {
        apiKey: mapKey
    };
    // loader에 apiOptions로 mapKey 삽입
    const loader: any = new Loader(apiOptions);
    loader.load().then(() => {
        if (city !== undefined) {
            console.log('Maps JS API Loaded');
            const map: any = displayMap();
            const markers: any = addMarkers(map);
            addPanToMarker(map, markers);
        }
    });
    function displayMap() {
        // 초기 위치 및 확대 정도 설정
        let lat = 0;
        let lng = 0;
        for (let i = 0; i < city.length; i++) {
            lat += Number(city[i].lat);
            lng += Number(city[i].lng);
        }
        lat /= 4;
        lng /= 4;
        setLatMid(lat);
        setLngMid(lng);
        const mapOptions = {
            center: { lat: latMid, lng: lngMid },
            zoom: 12
        };
        // 지도의 초기 위치 및 확대 정도 적용하여 id='map'인 요소에 적용
        const mapDiv: any = document.getElementById('map');
        const map = new window.google.maps.Map(mapDiv, mapOptions);
        return map;
    }

    function addMarkers(map: any) {
        // 지도에 위도, 경도 이용하여 마커 추가하는 작업
        const temp = city.map((t: any) => {
            return { name: t.name, lat: t.lat, lng: t.lng };
        });
        const locations: any = {};
        temp.map(
            (t: any) =>
                (locations[t.name] = { lat: Number(t.lat), lng: Number(t.lng) })
        );
        const markers = [];
        for (const location in locations) {
            // for문을 이용하여 가져온 지도에 위치 넣는 작업
            const markerOptions = {
                map: map,
                position: locations[location]
                // icon: '' 아이콘에 다른 이미지 파일 넣을 수 있음
            };
            const marker = new window.google.maps.Marker(markerOptions);
            markers.push(marker);
        }
        return markers;
    }
    function addPanToMarker(map: any, markers: any) {
        // 마커를 누르면 마커가 중앙에 오게 이동
        markers = markers.map((marker: any) => {
            marker.addListener('click', (event: any) => {
                const location = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                };
                map.panTo(location);
            });
        });
        return markers;
    }
    return (
        <div id='hot-place' className='pb-16'>
            <span className='text-2xl font-bold'>인기 여행지</span>
            <div id='map' className='w-full mt-8' style={{ height: '600px' }} />
            <Places city={city} hotPlaceImgs={hotPlaceImgs} />
        </div>
    );
}
