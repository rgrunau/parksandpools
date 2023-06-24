import { currentUser } from "@clerk/nextjs";


export const getClerkUser = async () => {
    const user = await currentUser();
    return user;
};