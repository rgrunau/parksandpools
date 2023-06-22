'use client'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import FormTextArea from '@/components/form-components/form-text-area';
import { VisitedPark } from "@prisma/client";
import ParkVisits from "./park-visits";
import { redirect } from "next/navigation";



export default function EditParkForm({park}: {park: VisitedPark}) {

    const [like, setLike] = useState<boolean>(park.liked);
    const [visits , setVisits] = useState<number>(park.visits || 1);
    const handleLike = () => {
        setLike(!like);
    };

    const addVisit = ():void => {
       setVisits(visits + 1);
    }
    const subtractVisit = ():void => {
        setVisits(visits - 1);
        if(visits === 1) {
            setVisits(1);
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedPark = {
            liked: like,
            visits: visits,
            notes: formData.get('notes')
        }
        const response = await fetch(`/api/parks/${park.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedPark)
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
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
        >
            <div className="w-full">
                <div className='flex gap-6 items-center justify-between mt-4'>
                    <div className="w-1/4">
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
                    <ParkVisits
                        visits={visits}
                        addVisit={addVisit}
                        subtractVisit={subtractVisit}
                    />
                </div>
            </div>
            <div className="w-full mt-4">
               <FormTextArea
                    name='notes'
                    id='notes'
                    value={park.notes}
               />
            </div>
            <footer className="fixed bottom-2 py-1">
                <div className="flex items-center justify-evenly">
                    <div className="flex items-center">
                        <button 
                            type="submit"
                            className="bg-sky-500 text-slate-50 h-10 px-1 py-2 rounded-md"
                        >
                            Update Park
                        </button>
                    </div>
                    <div className="flex items-center fixed right-4 pr-2">
                        <button
                            type="button" 
                            className="bg-red-500 text-slate-50 h-10 px-1 py-2 rounded-md"
                        >
                            Delete Park
                        </button>
                    </div>
                </div>
            </footer>
        </form>
    )
}