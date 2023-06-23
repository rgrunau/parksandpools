import Link from "next/link";
import { routes } from "@/consts/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavList = () => (
    <div className="px-2 pt-2 pb-3">
        <ul>
           {routes.map((route, index) => (
                <li key={index}>
                    <Link 
                        key={index}
                        href={route.path}
                        className="flex items-center px-3 py-2 text-2xl font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    >
                        <div>
                            <FontAwesomeIcon icon={route.icon} className="text-2xl" />
                        </div>
                        <div className="px-2">
                            {route.name}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)