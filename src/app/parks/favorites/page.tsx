import ParksCard from "@/components/parks/components/park-cards";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getFavoriteParks } from "../../../../lib/get-user-parks";
import LinkCTA from "@/components/global-components/CTA/link-cta";
import PageEmptyState from "@/components/global-components/empty-states/page-empty";

export default async function FavoritesPage() {
    const favorites = await getFavoriteParks();

    return (
        <div className="flex flex-col">
            {favorites && favorites.map((favorite) => (
               <ParksCard key={favorite.parkId} park={favorite} />
            ))}
            {favorites.length === 0 && (
                <PageEmptyState
                    text="You don't have any favorite parks yet."
                    renderCTA={() => (
                        <LinkCTA 
                            href="/parks"
                            icon={faPlus}
                            text="Add a park"
                        />
                    )}
                />
            )}
        </div>
    )
}