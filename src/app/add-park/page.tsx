'use client'
import { useMemo, useState, FormEvent, useCallback } from 'react';
import { useSelectedParkStore } from '@/store/selected-park-store';
import { useAuth } from '@clerk/nextjs';
import { getLatLng } from 'use-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import AddParkMap from '@/components/add-park/add-park-map';
import FormTextArea from '@/components/form-components/form-text-area';

export default function AddPark() {
    const router = useRouter();
    const { userId } = useAuth();
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
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
            parkName: selectedPark?.name,
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
            router.push('/dashboard');
        }
    };

    return (
        <div className='w-full lg:w-1/2 h-screen lg:h-full flex flex-col bg-white mx-auto p-6 rounded-md'>
            <div className='w-full'>
                <AddParkMap
                    lat={lat}
                    lng={lng}
                />
            </div>
            <div className='w-full py-4'>
                <form 
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-2'
                >
                    <div className="flex flex-col">
                        <h1 className='text-2xl font-semibold text-primary-green'>{selectedPark?.name}</h1>
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
                    <FormTextArea
                        name='notes'
                        id='notes'
                    />
                    <div>
                        <button
                            type='submit'
                            className='bg-sky-500 text-slate-50 rounded-md p-2'
                        >
                            Add Park
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}