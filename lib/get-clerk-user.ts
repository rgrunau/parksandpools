import { currentUser } from "@clerk/nextjs";

export const getClerkUser = async () => {
    const user = await currentUser();
    if(!user) {
        throw new Error("You have to be logged in to perform this action");
    }
    
    return user;
};