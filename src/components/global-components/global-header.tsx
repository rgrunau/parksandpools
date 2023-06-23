'use client'
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GlobalNav } from "./global-nav";

const GlobalHeader = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false)
    const { isSignedIn  } = useAuth();
    return (
        <div>
            {isSignedIn && (
                <header className="w-full h-12 flex items-center justify-betwee bg-slate-50 text-slate-800">
                    <div className="max-w-7xlpy-6 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 
                                hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 "
                                aria-expanded={navOpen}
                                aria-label="Open main menu"
                                onClick={() => setNavOpen(!navOpen)}
                            >
                                <FontAwesomeIcon icon={faBars} className="text-2xl text-slate-900" />
                            </button>
                        </div>
                        {navOpen && (
                            <GlobalNav setNavOpen={setNavOpen} navOpen={navOpen} /> 
                        )}
                    </div>
                    <div>
                        {/* <h1 className="text-lg font-bold text-pink-500">Hello ${}</h1> */}
                    </div>
                </header>
            )}
        </div>
    );
};

export default GlobalHeader;