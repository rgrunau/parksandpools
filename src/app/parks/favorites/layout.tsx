

export default function FavoritesLayout({children}: {children: React.ReactNode}) {

    return (
        <main className="flex flex-col px-6 py-8">
            <div className="w-full text-left border-b-2 py-2 border-b-primary-blue">
                <h1 className="text-3xl font-semibold text-primary-red">Your Favorites Parks</h1>
            </div>
            <section className="w-full py-4">   
                {children}
            </section>
        </main>
    )

}