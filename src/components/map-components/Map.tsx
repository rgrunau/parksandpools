import {useState, useRef, useCallback, useMemo} from 'react';
import { GoogleMap, } from '@react-google-maps/api';
import Parks from './Parks';
import MapMarker from './MapMarker';
import { useSelectedParkStore } from '@/store/added-parks-store';

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;
type Location = google.maps.GeocoderResult;

export default function Map (){
    const [park, setPark] = useState<LatLngLiteral>();
    const [globalMap, setGlobalMap] = useState<google.maps.Map>();
    const setSelectedPark = useSelectedParkStore(state => state.setSelectedPark);
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const mapRef = useRef<google.maps.Map>();
    const center = useMemo<LatLngLiteral>(() => ({lat: 40.7128, lng: -74.0060}), []);
    const options = useMemo<MapOptions>(() => ({
        disableDefaultUI: true,
    }), []);


    const onMarkerClick = () => {
        setShowInfo(!showInfo);
    };

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        setGlobalMap(mapRef.current);
        return;
    }, []);

    
    return (
        <div className='flex h-screen'>
            <div className='w-1/5 flex flex-col px-1 py-2 bg-white'>
                <div className='w-full'>
                    <Parks 
                        setParks={(position: LatLngLiteral) => {
                        setPark(position);
                        if(mapRef.current) {
                            mapRef.current.panTo(position);
                        }}}
                        setSelectedPark={setSelectedPark}
                    />
                </div>
            </div>
            <div className='w-4/5 h-screen'>
                <GoogleMap
                    zoom={15}
                    center={center}
                    options={options}
                    onLoad={onLoad}                    
                    mapContainerClassName='map-container'
                >
                    {park && <MapMarker 
                        onClick={onMarkerClick} 
                        showInfo={showInfo} 
                        position={park}
                        />}
                </GoogleMap>
            </div>
        </div>
    )
}