import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import prisma from "../../../lib/primsa";
import Link from "next/link";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default async function Parks() {
    let parks = await prisma.visitedPark.findMany();
    return (
        <div className="w-full lg:max-w-[1400px] py-4 px-6 mb-6">
            <header>
                <div className="flex items-center justify-between">
                    <div className="w-1/2">
                        <h1 className="text-xl text-slate-900">Your Parks</h1>
                    </div>
                    <div className="w-1/4 flex justify-end">
                        <div className="flex">
                            <button type="button" className="bg-slate-500 text-slate-50 text-md h-10 w-24 px-4 py-2 rounded-md">All Parks</button>
                            <button type="button" className="bg-slate-500 text-slate-50 text-md h-10 w-24 px-4 py-2 rounded-md">Favorites</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="w-full flex flex-col items-center justify-center py-6">
                {parks && parks.map((park) => (
                    <Link href={`/park/${park.id}`} className={`w-full p-2 my-2 drop-shadow-lg rounded-lg border-2 ${park.liked ? 'border-pink-400' :'border-slate-400}'}`}>
                        <div className="w-full flex flex-col items-center justify-between  py-2">
                            <div className="w-full flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg text-slate-900">{park.parkName}</h2>
                                </div>
                                {park.liked && (
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            color="red"
                                        />
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className="text-lg text-slate-800">
                                    {park.notes}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
};