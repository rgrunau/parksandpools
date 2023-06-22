import { faHome, faHeart, faSearch, faLocation } from "@fortawesome/free-solid-svg-icons";
export const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"];

export const routes = [
    {
        path: "/dashboard", 
        name: "Home",
        icon: faHome,
    },
    {
        path: "/park-lookup", 
        name: "Park Lookup",
        icon: faSearch,
    },
    {
        path: "/parks",
        name: "All Parks",
        icon: faLocation,
    },
    {
        path: "/parks/favorites", 
        name: "Favorites",
        icon: faHeart,
    },
]