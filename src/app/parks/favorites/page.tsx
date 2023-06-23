import ParksCard from "@/components/parks/components/park-cards";
import prisma from "../../../../lib/primsa";
import { currentUser } from "@clerk/nextjs";

export default async function FavoriteParks() {
  const user = await currentUser();
  const favoriteParks = await prisma.visitedPark.findMany({
    where: {
      liked: true,
      userId: user?.id
    },
  });
  return (
    <div className="flex flex-col gap-2">
      {favoriteParks.map((park) => (
        <ParksCard
            key={park.id}
            park={park}
        />
      ))}
    </div>
  );
}