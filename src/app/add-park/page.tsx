
interface AddParkPageProps {
    selectedPark: google.maps.GeocoderResult;
}

export default function AddParkPage({selectedPark}: AddParkPageProps) {

    return (
        <div className="w-full w-max-[960px] mx-auto py-5 flex flex-col">
            <div>
                <h1 className="text-4xl font-bold text-center">{selectedPark.address_components[0].long_name}</h1>
            </div>
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