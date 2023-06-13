'use client'
import { useRef, useMemo, useCallback } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useSelectedParkStore } from "../../store/selected-park-store";
import MapMarker from "@/components/map-components/MapMarker";
import { LatLngLiteral, MapOptions } from "@/components/map-components/Map";

export default function AddParkLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
    const mapRef = useRef<google.maps.Map>();
    const center = useMemo<LatLngLiteral>(() => ({lat: selectedPark?.geometry.location.lat(), lng: selectedPark?.geometry.location.lng()}), []);
    const options = useMemo<MapOptions>(() => ({
        disableDefaultUI: true,
    }), []);
    console.log(selectedPark);
    //write better error handling for this
    if (!selectedPark) return null;
    console.log(selectedPark);

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        return;
    }, []);
    
    return (
        <div className="w-full w-max-11/12 flex justify-center bg-slate-100 p-10 border-2 rounded-md">
            <section className="w-full max-w-7xl flex justify-evenly bg-slate-50 border-1 rounded-md">
                <div className="w-1/2 p-2 bg-white">
                    {children}
                </div>
                <div className="w-1/2">
                    {/* <GoogleMap
                        zoom={15}
                        center={center}
                        options={options}
                        onLoad={onLoad}                    
                        mapContainerClassName='map-container'
                    >
                        {selectedPark && <MapMarker 
                            addParkPage={true}
                            showInfo={true} 
                            position={selectedPark.geometry.location.lat && selectedPark.geometry.location.lng ?}
                            />}
                    </GoogleMap> */}
                </div>
            </section>
        </div>
    )
  }