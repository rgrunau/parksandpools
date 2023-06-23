import DashboardCard from "@/components/home-components/DashboardCard";
import DashboardHeader from "@/components/home-components/DashboardHeader";
import prisma from "../../../lib/primsa";
import RecentParkList from "@/components/home-components/RecentParkList";
import { VisitedPark } from "@prisma/client";
import { currentUser } from "@clerk/nextjs";
import FavoriteParks from "@/components/favorite-parks/favorite-parks";



export default async function Dashboard() {
  const user = await currentUser();
  let rencentParks = await prisma.visitedPark.findMany(
    {
      where: {
        userId: user?.id
      },
    }
  ) as VisitedPark[];
  const sortedParks = rencentParks.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    } else {
      return 1;
    }
  })
  return (
    <div className="h-screen w-screen flex justify-center lg:p-8 bg-slate-200">
      <div className="w-full max-w-[1400px] px-4 flex flex-col items-center bg-slate-50 rounded-lg">
        <DashboardHeader />
        {/* dashboard body */}
        <div className="w-full lg:w-10/12 flex flex-col items-center justify-between my-4 lg:p-4">
          <div className="w-full lg:w-1/2 self-start py-4 gap-2">
            <DashboardCard
              cardHeaderText="Recent Parks"
              renderCardBody={() => (
                <div>
                    {rencentParks && (
                        <RecentParkList parks={sortedParks} />
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
             <DashboardCard
              cardHeaderText="Your Favorite Parks"
              renderCardBody={() => (
                <FavoriteParks  />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


