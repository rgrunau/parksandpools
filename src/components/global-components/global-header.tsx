'use client'
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { GlobalNav } from "./global-nav";
import { useGlobalNavigationStore } from "@/store/global-nav-store";

const GlobalHeader = () => {
    const navOpen = useGlobalNavigationStore(state => state.isNavOpen);
    const toggleNav = useGlobalNavigationStore(state => state.toggleNav);
    const { isSignedIn } = useAuth();
    return (
        <div>
            {isSignedIn && (
                <header className="w-full h-[100px] py-8 flex items-center justify-betwee bg-white text-slate-800">
                    <div className="w-full max-w-7xlpy-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                        <div className="flex items-center justify-between h-16">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 "
                                aria-expanded={navOpen}
                                aria-label="Open main menu"
                                onClick={toggleNav}
                            >
                                <FontAwesomeIcon icon={faBars} className="text-3xl text-primary-green" />
                            </button>
                        </div>
                        {navOpen && (
                            <GlobalNav setNavOpen={toggleNav} navOpen={navOpen} /> 
                        )}
                        <div>
                            <div>
                                <Link 
                                    href="/park-lookup"
                                    className="p-4 rounded-md"
                                >
                                    <FontAwesomeIcon 
                                        className="text-3xl text-primary-blue"
                                        icon={faMagnifyingGlass} 
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
            )}
        </div>
    );
};

export default GlobalHeader;