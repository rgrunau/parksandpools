import prisma from "../../../../lib/primsa"
import { getClerkUser } from "../../../../lib/getClerkUser"
import { redirect } from "next/navigation";
import ParksCard from "@/components/parks/components/park-cards";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
            {favorites.length === 0 && (
                <div className="flex flex-col items-center gap-3 text-center text-2xl">
                    <div className="py-4 text-slate-800 font-semibold">
                        You have no favorites yet!
                    </div>
                    <div className="w-[250px] py-4">
                        <Link 
                            className="text-slate-50 bg-pink-500 py-2 px-1 rounded-lg flex justify-center items-center gap-2"
                            href="/park-lookup"
                        >
                            
                            <div className="w-1/12">
                                <FontAwesomeIcon 
                                    className="text-slate-50"
                                    icon={faPlus} 
                                />
                            </div>
                            <div className="w-3/4">
                                a favorite park
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}