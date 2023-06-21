import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { NavList } from "./nav-list";
import { SignOutButton } from "@clerk/nextjs";


interface GlobalNavProps {
    setNavOpen: (navOpen: boolean) => void;
    navOpen: boolean;
}
export const GlobalNav = ({setNavOpen, navOpen}: GlobalNavProps) => (
    <nav className={`w-screen lg:w-96 transition-all duration-500 ease-in-out z-20 
        bg-white ${navOpen ? 'translate-x-0' : '-translate-x-full'}
        absolute top-0 left-0 h-screen flex flex-col justify-start items-center`}
    >
        <div className="w-full flex items-center justify-end">
            <div className="p-4">
                <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
                    onClick={() => setNavOpen(!navOpen)}
                >
                    <FontAwesomeIcon icon={faClose} className="text-3xl text-slate-900" />
                </button>
            </div>
        </div>
       <NavList />
       <SignOutButton>
            <div className="flex items-center p-0 mt-8">
                <div>
                    <FontAwesomeIcon icon={faFaceSadTear} className="text-2xl" />
                </div>
                <div className="px-2 text-2xl">
                    Sign Out
                </div>
            </div>
        </SignOutButton>
    </nav>
);