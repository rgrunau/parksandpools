import React from "react";


export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="w-full flex flex-col px-4 py-6">
            <div className="w-full">
                <h1 className="text-pink-500 text-2xl">Favorite Parks</h1>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}