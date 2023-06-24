import prisma from "../../../../lib/primsa"
import { getClerkUser } from "../../../../lib/getClerkUser"
import { redirect } from "next/navigation";
import ParksCard from "@/components/parks/components/park-cards";
export default async function FavoritesPage() {
   const user = await getClerkUser();
   if (!user) {
       redirect("/sign-in")
    }
    const favorites = await prisma.visitedPark.findMany({
        where: {
            liked: true,
            userId: user?.id
        }
    })

    return (
        <div className="flex flex-col">
            {favorites && favorites.map((favorite) => (
               <ParksCard key={favorite.parkId} park={favorite} />
            ))}
        </div>
    )
}