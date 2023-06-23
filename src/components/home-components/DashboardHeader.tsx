import Link from 'next/link';
import { currentUser } from "@clerk/nextjs";


const DashboardHeader = async () => {
    const user = await currentUser();
    return (
        <div 
            className="w-full lg:w-10/12 flex items-center 
            justify-between my-4 drop-shadow-xl rounded-md bg-white px-2 py-4"
        >
            <div className="w-1/2 lg:w-1/3">
                <h1 className="text-xl text-slate-700">Hello, {user?.firstName?.charAt(0).toLocaleUpperCase()}{user?.firstName?.slice(1)}</h1>
            </div>
            <div className="justify-self-end">
                <Link 
                    href="/park-lookup"
                    className="bg-pink-500 text-white px-4 py-2 rounded-md"
                >
                    Park Lookup
                </Link>
            </div>
        </div>  
    );
        
    
}

export default DashboardHeader;