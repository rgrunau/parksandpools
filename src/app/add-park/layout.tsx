export default function AddParkLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="w-full w-max-11/12 flex justify-center bg-slate-100 p-10">
            <section className="w-full max-w-7xl flex justify-evenly bg-slate-50">
                <div className="w-1/3 p-2 bg-white">
                    {children}
                </div>
                <div className="w-2/3 p-2">
                    Map here
                </div>
            </section>
        </div>
    )
  }