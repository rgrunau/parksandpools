import ParksCard from "@/components/parks/components/park-cards";
import prisma from "../../../../lib/primsa";

export default async function FavoriteParks () {
    const favoriteParks = await prisma.visitedPark.findMany({
        where: {
            liked: true
        }
    });


    return (
        <div className="py-8">
            {favoriteParks && favoriteParks.map((park) => (
                <ParksCard key={park.id} park={park} />
            ))}
        </div>
    )
} 