import { Marker, InfoWindow } from '@react-google-maps/api';
import { useSelectedParkStore } from '@/store/selected-park-store';
import Link from 'next/link';
import AddParkPage from '@/app/add-park/page';

interface MapMarkerProps {
    position: google.maps.LatLngLiteral;
    onClick?: () => void;
    showInfo: boolean;
    addParkPage?: boolean;
}
export default function MapMarker({position, onClick, showInfo, addParkPage,}: MapMarkerProps) {
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
    return (
        <>
            <Marker 
                position={position}
                onClick={onClick}
            >
                {selectedPark && showInfo && (
                        <InfoWindow
                            options={{pixelOffset: new google.maps.Size(0, -30)}}
                            position={{lat: selectedPark.geometry.location.lat(), lng: selectedPark.geometry.location.lng()}}
                        >
                            <div className='p-1 w-[300px] flex flex-col items-start gap-2'>
                                <div className='w-full px-4'>
                                    <h2 className='text-lg'>{selectedPark.address_components[0].long_name}</h2>
                                </div>
                                <div className='w-full px-4 my-1'>
                                    <p className='text-md'>{selectedPark.formatted_address}</p>
                                </div>
                                <div className='p-2 my-1'>
                                    {!addParkPage && (
                                        <Link 
                                            href={'/add-park'}
                                            className='bg-pink-400 text-white p-2 rounded-md'
                                        >
                                            Add Park
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </InfoWindow>
                     )}
            </Marker>
        </>
    )
}