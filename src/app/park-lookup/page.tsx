'use client'
import { useLoadScript } from "@react-google-maps/api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { libraries } from "@/consts/constants"
import Map from "@/components/map-components/Map"



export default function ParkLookup() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  return (
    <div className="h-screen w-screen">

      {!isLoaded && (
        <div className="w-3/4 flex items-center justify-center mx-auto">
          <div>
            <FontAwesomeIcon 
              icon={faSpinner} 
              spin 
              size="3x" 
            />
          </div>
        </div>
      )}
      {isLoaded && <Map />}
    </div>
  )
}


