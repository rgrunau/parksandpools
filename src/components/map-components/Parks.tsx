'use client'
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {FaSearch} from 'react-icons/fa';
import {useSelectedParkStore} from '@/store/selected-park-store';
import { useEffect } from 'react';

interface ParksProps {
    setParks: (position: google.maps.LatLngLiteral) => void;
    setSelectedPark: (location: google.maps.GeocoderResult) => void;
}

export default function Parks ({setParks}: ParksProps){
    const {ready, value, setValue, suggestions: {status, data}, clearSuggestions} = usePlacesAutocomplete();
    const setSelectedPark = useSelectedParkStore(state => state.setSelectedPark);
    const onPlaceSelection = async (value: string) => {
        setValue(value, false);
        clearSuggestions();
        const results = await getGeocode({address: value});
        setSelectedPark(results[0]);
        const {lat, lng} = await getLatLng(results[0]); 
        setParks({lat, lng});
        clearSuggestions();
    };

  


    return (
        <>
            <div className='w-full flex flex-col gap-2 items-center justify-center lg:justify-start mt-4'>
                <div className='w-full pl-2'>
                    <h1 className='text-3xl font text-primary-green'>Search Parks</h1>
                </div>
                <div className='w-full flex items-center pl-2'>
                    <div className='1/5'>
                        <FaSearch className='text-primary-blue text-lg'/>
                    </div>
                    <div className='w-full lg:w-4/5 mx-auto lg:ml-2 p-2'>
                        <input 
                            className='w-full h-10 p-2 bg-slate-200 
                            focus:bg-white focus:border-slate-700 focus:text-primary-blue focus:border-2 rounded-md text-lg'
                            type="text" 
                            placeholder='Search Parks... or something' 
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            disabled={!ready}
                        />
                    </div>
                </div>
            </div>
            <div className='w-full bg-slate-50'>
                {status === 'OK' && (
                    <ul className='w-full px-1 py-4'>
                        {data.map((suggestion) => {
                            const {place_id, description} = suggestion;
                            return (
                                <li key={place_id} 
                                    className='p-2 bg-white hover:bg-primary-green hover:text-white text-xl' 
                                    onClick={() => onPlaceSelection(description)}
                                >
                                    {description}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </>
    )
}