'use client'
import { useLoadScript } from "@react-google-maps/api"
import { libraries } from "@/consts/constants"
import Map from "@/components/map-components/Map"



export default function Home() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="h-screen w-screen">
      <Map/>
    </div>
  )
}


