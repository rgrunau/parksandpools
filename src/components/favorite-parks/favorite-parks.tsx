import prisma from "../../../lib/primsa";


export default async function FavoriteParks() {
    const favoriteParks = await prisma.visitedPark.findMany({
        where: {
            liked: true
        }
    });


    return (
        <>
            {favoriteParks && (
                <div className="flex flex-col gap-2">
                    <ul>
                        {favoriteParks.map((park) => (
                            <li>
                                <h2 className="text-2xl text-slate-700">{park.parkName}</h2>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {!favoriteParks && (
                <div>
                    <h2 className="text-xl text-slate-700">No Favorite Parks</h2>
                    <h3>Go to a park</h3>
                </div>
            )}
        </>
    )
}