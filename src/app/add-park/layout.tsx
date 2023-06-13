'use client'
import { useRef, useMemo, useCallback, useEffect, useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useSelectedParkStore } from "../../store/selected-park-store";
import MapMarker from "@/components/map-components/MapMarker";
import { LatLngLiteral, MapOptions } from "@/components/map-components/Map";
import { getLatLng } from "use-places-autocomplete";
import { useParkLocationStore } from "@/store/park-location-store";

export default function AddParkLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
    const parkLocation = useParkLocationStore(state => state.parkLocation);
    const setParkLocation = useParkLocationStore(state => state.setParkLocation);
    const showInfo = true;
    const mapRef = useRef<google.maps.Map>();
    const center = useMemo<LatLngLiteral>(() => ({lat: parkLocation?.lat ?? 0 , lng: parkLocation?.lng ?? 0}), [parkLocation]);
    const options = useMemo<MapOptions>(() => ({
        disableDefaultUI: true,
    }), []);
    //write better error handling for this
    if (!selectedPark) return null;
    

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        return;
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const {lat, lng} = await getLatLng(selectedPark);
            setParkLocation({lat, lng});
        };
        fetchData();
    }, [selectedPark]);
    
    return (
        <div className="w-full h-screen w-max-11/12 flex justify-center bg-slate-100 p-10">
            <section className="w-full max-w-7xl flex justify-evenly bg-slate-50">
                <div className="w-1/2 p-2 bg-white">
                    {children}
                </div>
                <div className="w-1/2 p-2">
                <GoogleMap
                    zoom={15}
                    center={center}
                    options={options}
                    onLoad={onLoad}                    
                    mapContainerClassName='map-container'
                >
                    {selectedPark && <MapMarker 
                        addParkPage={true}
                        showInfo={showInfo} 
                        position={parkLocation || undefined}
                        />}
                </GoogleMap>
                </div>
            </section>
        </div>
    )
  }