import { Loader } from '@googlemaps/js-api-loader';
import { useState } from 'react';

declare global {
    interface Window {
        google: any;
    }
}

export default function GoogleMapSearch({ city, zoom }: { city: any; zoom: number }) {
    const [latMid, setLatMid] = useState(0);
    const [lngMid, setLngMid] = useState(0);
    
    const mapKey: string | undefined = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;
    const apiOptions: any = {
        apiKey: mapKey
    };
    const loader: any = new Loader(apiOptions);
    loader.load().then(() => {
        console.log('Maps JS API Loaded');
        const map: any = displayMap();
        const markers: any = addMarkers(map);
        addPanToMarker(map, markers);
    });
    
    function displayMap() {
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
            zoom: zoom
        };
        const mapDiv: any = document.getElementById('map');
        const map = new window.google.maps.Map(mapDiv, mapOptions);
        return map;
    }

    function addMarkers(map: any) {
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
            const markerOptions = {
                map: map,
                position: locations[location]
            };
            const marker = new window.google.maps.Marker(markerOptions);
            markers.push(marker);
        }
        return markers;
    }
    
    function addPanToMarker(map: any, markers: any) {
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
        <div className="w-full h-full">
            <div id="map" className="w-full h-full"></div>
        </div>
    );
}

