import {useState, useEffect, useRef, useCallback, useMemo} from 'react';
import { GoogleMap, Marker, MarkerClusterer, Circle, DirectionsRenderer } from '@react-google-maps/api';
import Parks from './Parks';

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map (){
    const [park, setPark] = useState<LatLngLiteral>();
    const mapRef = useRef<GoogleMap>();
    const center = useMemo<LatLngLiteral>(() => ({lat: 40.7128, lng: -74.0060}), []);
    const options = useMemo<MapOptions>(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
    }), []);

    const onLoad = useCallback((map: GoogleMap) => (mapRef.current = map), []);


    return (
        <div className='flex h-screen'>
            <div className='w-1/5 flex flex-col px-1 py-2 bg-slate-100'>
                <div className='w-full'>
                    <Parks setParks={(position: LatLngLiteral) => {
                        setPark(position);
                        if(mapRef.current) mapRef.current.panTo(position);
                    }}/>
                </div>
            </div>
            <div className='w-4/5 h-screen'>
                <GoogleMap
                    zoom={10}
                    center={center}
                    options={options}
                    onLoad={onLoad}                    
                    mapContainerClassName='map-container'
                >

                </GoogleMap>
            </div>
        </div>
    )
}