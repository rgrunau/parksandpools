import Link from 'next/link';


const DashboardHeader = () => (
    <div 
        className="w-full lg:w-10/12 flex items-center 
        justify-between my-4 drop-shadow-xl rounded-md bg-white px-2 py-4"
    >
        <div className="w-1/2 lg:w-1/3">
            <h1 className="text-xl text-slate-700">Parks and Pools</h1>
        </div>
        <div className="justify-self-end">
            <Link 
                href="/park-lookup"
                className="bg-sky-500 text-white px-4 py-2 rounded-md"
            >
                Park Lookup
            </Link>
        </div>
    </div>  
);

export default DashboardHeader;