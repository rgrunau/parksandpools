'use client'
import { useMemo, useState, FormEvent } from 'react';
import { useSelectedParkStore } from '@/store/selected-park-store';
import { useAuth } from '@clerk/nextjs';
import { getLatLng } from 'use-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { redirect } from 'next/navigation';

export default function AddPark() {
    const { userId } = useAuth();
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
    console.log(selectedPark);
    const [like, setLike] = useState<boolean>(false);
    //@ts-ignore
    const { lat, lng } = useMemo(() => getLatLng(selectedPark), [selectedPark]);
    const handleLike = () => {

        setLike(!like);
    };

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newPark = {
            userId: userId,
            parkName: selectedPark?.address_components[0].long_name,
            address: selectedPark?.formatted_address,
            //this is the place_id from google maps
            parkId: selectedPark?.place_id,
            lat: lat,
            lng: lng,
            notes: formData.get('notes'),
            liked: like
        };
        const response = await fetch('/api/parks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPark),
        });
        if(!response.ok) {
            console.log('error');
        }
        if(response.ok) {
            console.log('success');
            redirect('/dashboard');
        }
    };

    return (
        <div className='w-1/2 h-full bg-white mx-auto p-6 rounded-md'>
            <h1>Add Park</h1>
            <form 
                onSubmit={handleSubmit}
                className='flex flex-col gap-2'
            >
                <div className="flex flex-col">
                    <h2>{selectedPark?.address_components[0].long_name}</h2>
                </div>
                <div className='flex flex-col gap-1'>
                    <button 
                        type='button'
                        onClick={handleLike}
                        className='flex items-center justify-start'
                    >
                        <FontAwesomeIcon
                            className='w-8 h-8'
                            color={like ? 'red' : 'gray'}
                            icon={faHeart}
                        />
                    </button>
                </div>
                <div className='flex flex-col gap-1'>
                    <div>
                        <label htmlFor="notes">Park Notes</label>
                    </div>
                    <div>
                        <textarea 
                            name="notes" 
                            id="notes" 
                            className='bg-slate-100 w-96 h-32 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white resize-none'
                        >

                        </textarea>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='bg-sky-500 text-white rounded-md p-2'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}