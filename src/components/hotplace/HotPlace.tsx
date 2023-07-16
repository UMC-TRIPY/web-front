import { Loader } from '@googlemaps/js-api-loader';

export default function HotPlace() {
    // 환경변수에서 Map Key 가져옴
    const mapKey: any = process.env.NEXT_PUBLIC_MAP_KEY;
    const apiOptions: any = {
        apiKey: mapKey
    };
    // loader에 apiOptions로 mapKey 삽입
    const loader: any = new Loader(apiOptions);
    loader.load().then(() => {
        console.log('Maps JS API Loaded');
        const map: any = displayMap();
        const markers: any = addMarkers(map);
        addPanToMarker(map, markers);
    });
    function displayMap() {
        // 초기 위치 및 확대 정도 설정
        const mapOptions = {
            center: { lat: 34.67187893957369, lng: 135.47977941591452 },
            zoom: 14
        };
        // 지도의 초기 위치 및 확대 정도 적용하여 id='map'인 요소에 적용
        const mapDiv = document.getElementById('map');
        const map = new google.maps.Map(mapDiv, mapOptions);
        return map;
    }
    function addMarkers(map: any) {
        // 지도에 위도, 경도 이용하여 마커 추가하는 작업
        const locations: any = {
            universalStudio: { lat: 34.66542228376301, lng: 135.4323451300621 },
            dotonbori: { lat: 34.6688500051718, lng: 135.50278316819896 },
            osakajo: { lat: 34.68725079622799, lng: 135.52586927613112 }
        };
        const markers = [];
        for (const location in locations) {
            // for문을 이용하여 가져온 지도에 위치 넣는 작업
            const markerOptions = {
                map: map,
                position: locations[location]
                // icon: '' 아이콘에 다른 이미지 파일 넣을 수 있음
            };
            const marker = new google.maps.Marker(markerOptions);
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
        <div className='mt-16'>
            <span className='text-2xl font-bold'>인기 여행지</span>
            <div
                id='map'
                className='w-full mt-8'
                style={{ height: '600px' }}
            ></div>
        </div>
    );
}
