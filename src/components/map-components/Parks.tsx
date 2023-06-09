'use client'
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {FaSearch} from 'react-icons/fa';


interface ParksProps {
    setParks: (position: google.maps.LatLngLiteral) => void;
}

export default function Parks ({setParks}: ParksProps){
    const {ready, value, setValue, suggestions: {status, data}, clearSuggestions} = usePlacesAutocomplete();
    console.log(data);
    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <div className='1/5'>
                    <FaSearch className='text-slate-700'/>
                </div>
                <div className='w-4/5 ml-2'>
                    <input 
                        className='w-full h-10 p-2 bg-slate-200 text-sm focus:bg-slate-50 focus:border-slate-700 focus:border-2 rounded-md'
                        type="text" 
                        placeholder='Search Parks... or something' 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        disabled={!ready}
                    />
                </div>
            </div>
            <div className='w-full bg-slate-50'>
                {status === 'OK' && (
                    <ul className='w-full px-1 py-4'>
                        {data.map((suggestion) => {
                            const {place_id, description} = suggestion;
                            return (
                                <li key={place_id} className='p-2 hover:bg-slate-200' onClick={async () => {
                                    setValue(description, false);
                                    clearSuggestions();
                                    try {
                                        const results = await getGeocode({address: description});
                                        const {lat, lng} = await getLatLng(results[0]);
                                        setParks({lat, lng});
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }}>
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