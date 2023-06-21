import { useCallback, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import MapMarker from "../map-components/MapMarker";

interface AddParkMapProps {
    lat: number;
    lng: number;
}

export default function AddParkMap({lat, lng}: AddParkMapProps) {
    const mapRef = useRef<google.maps.Map>();
    const center = {lat, lng};
    const options = {
        disableDefaultUI: true,
    };

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        return;
    }, []);

    return (
        <div className='w-full'>
            <GoogleMap
                zoom={18}
                center={center}
                options={options}
                onLoad={onLoad}
                mapContainerClassName='add-park-map-container '
            >
                
            </GoogleMap>
        </div>
    )
}