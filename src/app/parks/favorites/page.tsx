import ParksCard from "@/components/parks/components/park-cards";
import prisma from "../../../../lib/primsa";

export default async function FavoriteParks() {
  const favoriteParks = await prisma.visitedPark.findMany({
    where: {
      liked: true,
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