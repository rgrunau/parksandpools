import { VisitedPark } from "@prisma/client";
import  Link  from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


interface RecentParkListProps {
    parks: VisitedPark[];
}
const RecentParkList = ({parks}: RecentParkListProps) => (
    <div className="flex flex-col gap-2">
        {parks.map((park) => (
            <Link href={`/parks/${park.parkId}`}
                key={park.id}
                className="flex items-center w-full gap-2 mx-2"
            >
            <div>
                <h2 className="text-xl text-slate-700">{park.parkName}</h2>
            </div>
                <div className="pl-2">
                    {park.liked && (
                        <FontAwesomeIcon
                            icon={faHeart}
                            color="red"
                            className="text-2xl"
                        />
                    )}
                </div>
            </Link>
        ))}
    </div>
)

export default RecentParkList;