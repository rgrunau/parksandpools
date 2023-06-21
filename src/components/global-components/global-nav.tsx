import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


interface GlobalNavProps {
    setNavOpen: (navOpen: boolean) => void;
    navOpen: boolean;
}
export const GlobalNav = ({setNavOpen, navOpen}: GlobalNavProps) => (
    <nav className={`w-screen transition-all duration-500 ease-in-out z-20 
        bg-white ${navOpen ? 'translate-x-0' : '-translate-x-full'}
        absolute top-0 left-0 h-screen flex flex-col justify-start items-center`}
    >
        <div className="w-full flex items-center justify-end">
            <div className="pr-4">
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
        <div className="px-2 pt-2 pb-3">
            <ul>
                <li className="px-2 py-1 hover:bg-slate-100 rounded-md text-2xl">
                    nav item 1
                </li>
                <li className="px-2 py-1 hover:bg-slate-100 rounded-md">
                    nav item 2
                </li>
                <li className="px-2 py-1 hover:bg-slate-100 rounded-md">
                    nav item 3
                </li>
            </ul>
        </div>
    </nav>
);