import prisma from "../../../../lib/primsa";

export default async function FavoriteParks () {
    const favoriteParks = await prisma.visitedPark.findMany({
        where: {
            liked: true
        }
    });


    return (
        <div>
            {favoriteParks && favoriteParks.map((park) => (
                <div key={park.id}>
                    <h2>{park.parkName}</h2>
                    <p>{park.notes}</p>
                </div>
            ))}
        </div>
    )
} 