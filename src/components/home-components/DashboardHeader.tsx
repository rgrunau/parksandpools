import { currentUser } from "@clerk/nextjs";
import prisma from "../../../lib/primsa";

const DashboardHeader = async () => {
    const user = await currentUser();
    const parks = await prisma.visitedPark.findMany({
        where: {
            userId: user?.id
        }
    });
    const count = parks?.length;
    return (
        <div 
            className="w-full lg:w-10/12 flex flex-col lg:flex-row items-start lg:items-center 
            justify-between my-4 drop-shadow-xl rounded-md bg-white px-2 py-4"
        >
            <div className="w-1/2 lg:w-1/3">
                <h1 className="text-3xl text-primary-green">Hello, {user?.firstName?.charAt(0).toLocaleUpperCase()}{user?.firstName?.slice(1)}</h1>
            </div>
            <div>
                <h2 className="text-lg text-slate-700">{`You've been to: ${count} parks`}</h2>
            </div>
        </div>  
    );
        
    
}

export default DashboardHeader;