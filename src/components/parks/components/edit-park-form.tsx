'use client'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import FormTextArea from '@/components/form-components/form-text-area';
import { VisitedPark } from "@prisma/client";
import ParkVisits from "./park-visits";



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
    return (
        <form
            className="flex flex-col gap-4"
        >
            <div className="w-full">
                <div className='flex gap-1'>
                    <div className="w-1/2">
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
            <div className="w-full">
               <FormTextArea
                    name='notes'
                    id='notes'
                    value={park.notes}
               />
            </div>
        </form>
    )
}