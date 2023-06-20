'use client'
import { useState, MouseEventHandler } from "react";
import {useSelectedParkStore} from "@/store/selected-park-store";
import {LikeButton}  from "@/components/form-components/like-button";
import PAndPDatePicker from "@/components/form-components/DatePicker";
import NotesComponent from "@/components/form-components/NotesComponent";
import { useRouter } from "next/navigation";
import { get } from "http";
import { getLatLng } from "use-places-autocomplete";
import ts from "typescript";

export default function AddParkPage() {
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
    const [like, setLike] = useState(false);
    //@ts-ignore
    const lat = await getLatLng(selectedPark).lat;
    //@ts-ignore
    const lng = await getLatLng(selectedPark).lng;
    const handleRating: MouseEventHandler<HTMLButtonElement> = (event) => {
        setLike(!like);
    };
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData = Object.fromEntries(data.entries());
        const newPark = {
            name: selectedPark?.address_components[0].long_name,
            address: selectedPark?.formatted_address,
            lat: lat,
            lng: lng,
            liked: like,
            date: formData.date,
            notes: formData.notes
        };
        debugger;

        const res = await fetch('/api/parks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPark)
        });
        if(res.ok) {
            console.log('park added');
            router.push('/dashboard');
        }
        if(!res.ok) {
            console.log('something went wrong');
        }
    };
    
    if (!selectedPark) return null;
    // write an error boundry for this
    return (
        <div className="w-full h-screen w-max-[960px] mx-auto py-5 flex flex-col items-start">
            
            <div className=" w-11/12 py-4 mx-auto drop-shadow-md rounded-lg self-start">
                <form 
                    className="w-11/12 p-2 flex flex-col gap-2 border-2 border-gray-300 rounded-md"
                    onSubmit={handleSubmit}
                >
                    {selectedPark && (
                        <div className="self-start">
                            <h1 className="text-2xl">{selectedPark.address_components[0].long_name}</h1>
                        </div>
                    )}
                    <div className="w-full flex flex-col lg:flex-row items-center px-2">
                        <LikeButton like={like} setLike={handleRating}/>
                        <PAndPDatePicker/>
                    </div>
                    <NotesComponent/>
                    <div>
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Add Park
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}