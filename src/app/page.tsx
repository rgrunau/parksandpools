import DashboardCard from "@/components/home-components/DashboardCard";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";



export default function Home() {
  const rencentParks = false
  return (
    <div className="h-screen w-screen flex justify-center p-8 bg-slate-200">
      <div className="w-full w-max-10/12 p-4 flex flex-col items-center bg-slate-50 rounded-lg">
        {/* dashboard header */}
        <div className="w-10/12 flex flex-col lg:flex-row items-center justify-between my-4 drop-shadow-xl rounded-md bg-white p-2">
          <div className="w-full lg:w-1/3">
            <h1 className="text-4xl text-pink-500">Parks and Pools</h1>
          </div>
          <div className="justify-self-center">
            <Link 
              href="/park-lookup"
              className="bg-pink-500 text-white px-4 py-2 rounded-md"
            >
              Park Lookup
            </Link>
          </div>
          <div>
            <UserButton afterSignOutUrl="/"/>
          </div>
        </div>
        {/* dashboard body */}
        <div className="w-10/12 flex flex-col lg:flex-row items-center justify-between my-4 p-4">
          {/* dashboard card */}
          <DashboardCard
            cardHeaderText="Recent Parks"
            renderCardBody={() => (
              <div>
                  {rencentParks && (
                      <div className="flex flex-col gap-2">
                      parks
                      </div>
                  )}
                  {!rencentParks && (
                      <div>
                      <h2 className="text-xl text-slate-700">No Recent Parks</h2>
                      <h3>Go to a park</h3>
                      </div>
                  )}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}


