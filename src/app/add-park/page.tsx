'use client'
import { FormInput } from "@/components/form-components/Input";
import {useSelectedParkStore} from "@/store/selected-park-store";

export default function AddParkPage() {
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
    return (
            <div className="w-full h-screen w-max-[960px] mx-auto py-5 flex flex-col items-start">
                {selectedPark && (
                    <div className="self-start">
                        <h1 className="text-4xl">{selectedPark.address_components[0].long_name}</h1>
                    </div>
                )}
                <div className=" w-11/12 py-4 mx-auto drop-shadow-md rounded-lg self-start">
                    <form className="flex flex-col gap-2">
                       <FormInput
                            name="park-name"
                            label="Park Name"
                            type="text"
                            value={selectedPark.address_components[0].long_name}
                            id="park-name"
                       />
                    </form>
                </div>
            </div>
    )
}