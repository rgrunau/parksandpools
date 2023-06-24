import prisma from "../../../lib/primsa";
import ParksCard from "../parks/components/park-cards";
import { currentUser } from "@clerk/nextjs";

export default async function FavoriteParks() {
    const user = await currentUser();
    const favoriteParks = await prisma.visitedPark.findMany({
        where: {
            liked: true,
            userId: user?.id
        }
    });


    return (
        <div className="w-full flex flex-col items-center justify-center py-6">
            {favoriteParks && (
                <div className="w-11/12 flex flex-col gap-2">
                    {favoriteParks.map((park) => (
                        <ParksCard park={park} key={park.id} />
                    ))}
                </div>
            )}
            {!favoriteParks && (
                <div>
                    <h2 className="text-xl text-slate-700">No Favorite Parks</h2>
                    <h3>Go to a park</h3>
                </div>
            )}
        </div>
    )
}