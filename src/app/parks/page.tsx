import prisma from "../../../lib/primsa";
import ParksCard from "@/components/parks/components/park-cards";
import { currentUser } from "@clerk/nextjs";
export default async function Parks() {
    const user = await currentUser();
    let parks = await prisma.visitedPark.findMany({
        where: {
            userId: user?.id
        },
    });
    return (
        <div className="w-full lg:max-w-[1400px] py-4 px-6 mb-6">
            <header>
                <div className="flex items-center justify-between">
                    <div className="w-1/2">
                        <h1 className="text-xl text-slate-900">Your Parks</h1>
                    </div>
                    <div className="w-1/4 flex justify-end">
                        <div className="flex">
                            <button type="button" className="bg-slate-500 text-slate-50 text-md h-10 w-24 px-4 py-2 rounded-md">All Parks</button>
                            <button type="button" className="bg-slate-500 text-slate-50 text-md h-10 w-24 px-4 py-2 rounded-md">Favorites</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="w-full flex flex-col items-center justify-center py-6">
                {parks && parks.map((park) => (
                   <ParksCard key={park.id} park={park} />
                ))}
            </div>
        </div>
    )
};