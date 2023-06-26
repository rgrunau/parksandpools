import prisma from "./primsa";
import { getClerkUser } from "./get-clerk-user";

export const getAllUserParks = async () => {
    const user = await getClerkUser();
    if (!user) {
        throw new Error("No user found");
    }
    const parks = await prisma.visitedPark.findMany({
        where: {
            userId: user.id,
        },
    });
    const sortedParks = parks.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        } else {
          return 1;
        }
      })
    return sortedParks;
};

export const getFavoriteParks = async () => {
    const user = await getClerkUser();
    if (!user) {
        throw new Error("No user found");
    }
    const favoriteParks = await prisma.visitedPark.findMany({
        where: {
            userId: user.id,
            liked: true,
        },
    });
   return favoriteParks;
};

export const getVisitedPark = async (parkId: string) => {
    const user = await getClerkUser();
    if (!user) {
        throw new Error("No user found");
    }
    const visitedPark = await prisma.visitedPark.findUnique({
        where: {
            id: parkId,
        },
    });
    if (!visitedPark) {
        throw new Error("We couldn't find the park your looking for");
    }
    return visitedPark;
};