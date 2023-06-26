import EditParkForm from "@/components/parks/components/edit-park-form";
import { getVisitedPark } from "../../../../lib/get-user-parks";


export default async function Page({params}: {params: {id: string}}) {
    const id = params.id;
    const park = await getVisitedPark(id);
    
    
    return (
        <section className="w-full h-screen flex flex-col gap-4 py-4 px-4 bg-slate-50">
            <div>
                <h1 className="text-3xl text-primary-green">{park?.parkName}</h1>
            </div>
            <div>
                {park && (
                    <EditParkForm park={park} />
                )}
            </div>
        </section>
    )
}