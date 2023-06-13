'use client'
import { useState } from "react";
import { FormInput } from "@/components/form-components/Input";
import {useSelectedParkStore} from "@/store/selected-park-store";
import {RatingsInput}  from "@/components/form-components/ratings-input";
import PAndPDatePicker from "@/components/form-components/DatePicker";
import NotesComponent from "@/components/form-components/NotesComponent";

export default function AddParkPage() {
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
    
    const [rating, setRating] = useState(0);

    const handleRating = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRating(Number(e.target.value));
    };
    
    if (!selectedPark) return null;
    // write an error boundry for this
    return (
        <div className="w-full h-screen w-max-[960px] mx-auto py-5 flex flex-col items-start">
            {selectedPark && (
                <div className="self-start">
                    <h1 className="text-4xl">{selectedPark.address_components[0].long_name}</h1>
                </div>
            )}
            <div className=" w-11/12 py-4 mx-auto drop-shadow-md rounded-lg self-start">
                <form className=" w-11/12 p-2 flex flex-col gap-2 border-2 border-gray-300 rounded-md">
                    <FormInput
                        name="park-name"
                        label="Park Name"
                        type="text"
                        value={selectedPark.address_components[0].long_name}
                        id="park-name"
                    />
                    <RatingsInput rating={rating} setRating={() => handleRating} />
                    <PAndPDatePicker/>
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