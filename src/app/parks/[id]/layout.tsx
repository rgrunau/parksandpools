export default function Layout({children}: {children: React.ReactNode}) {

    return (
        <main className="py-4 px-2">
            {children}
        </main>
    )
}