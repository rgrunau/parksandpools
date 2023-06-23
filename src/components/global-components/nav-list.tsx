import Link from "next/link";
import { MouseEventHandler } from "react";
import { routes } from "@/consts/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalNavigationStore } from "@/store/global-navigation-store";
import { useRouter } from "next/navigation";

export const NavList = () => {
    
    const toggleNav = useGlobalNavigationStore(state => state.toggleNav);
    const router = useRouter();
    const handleNavClick = (path: string): MouseEventHandler<HTMLButtonElement> => (event) => {
        event.preventDefault();
        router.push(path);
        toggleNav();
    };
    
    return (
    <div className="px-2 pt-2 pb-3">
        <ul>
           {routes.map((route, index) => (
                <li key={index}>
                    <button 
                        aria-label={`navigate to ${route.name}`}
                        role="link"
                        key={index}
                        onClick={handleNavClick(route.path)}
                        className="flex items-center px-3 py-2 text-2xl font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    >
                        <div>
                            <FontAwesomeIcon icon={route.icon} className="text-2xl" />
                        </div>
                        <div className="px-2">
                            {route.name}
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    </div>
)}