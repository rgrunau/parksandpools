import {useState, useEffect, useRef, useCallback, useMemo} from 'react';
import { GoogleMap, Marker, MarkerClusterer, Circle, DirectionsRenderer } from '@react-google-maps/api';


type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map (){
    const center = useMemo<LatLngLiteral>(() => ({lat: 40.7128, lng: -74.0060}), []);

    return (
        <div className='flex h-screen'>
            <div className='w-1/5 p-4 bg-slate-100'>
                Search Parks... or something
            </div>
            <div className='w-4/5 h-screen'>
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerClassName='map-container'
                >

                </GoogleMap>
            </div>
        </div>
    )
}