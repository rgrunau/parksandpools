import ParksCard from "@/components/parks/components/park-cards";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getFavoriteParks } from "../../../../lib/get-user-parks";

export default async function FavoritesPage() {
    const favorites = await getFavoriteParks();

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
                            className="text-slate-50 bg-primary-blue py-2 px-1 rounded-lg flex justify-center items-center gap-2"
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