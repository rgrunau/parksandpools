'use client'
import {useSelectedParkStore} from "@/store/selected-park-store";

export default function AddParkPage() {
    const selectedPark = useSelectedParkStore(state => state.selectedPark);
    return (
            <div className="w-full h-screen w-max-[960px] mx-auto py-5 flex flex-col items-center">
                {selectedPark && (
                    <div>
                        <h1 className="text-4xl font-bold text-center">{selectedPark.address_components[0].long_name}</h1>
                    </div>
                )}
                <div>
                    <form className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            form
                        </div>
                    </form>
                </div>
            </div>
    )
}