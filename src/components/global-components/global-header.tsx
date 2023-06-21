'use client'
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GlobalNav } from "./global-nav";

const GlobalHeader = ({title}: {title:string}) => {
    const [navOpen, setNavOpen] = useState<boolean>(false)
    return (
        <div className="flex-grow">
            <header className="w-full flex items-center justify-start bg-slate-50 text-slate-800">
                <div className="max-w-7xlpy-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 
                            hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 md:hidden"
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
            </header>
        </div>
    );
};

export default GlobalHeader;