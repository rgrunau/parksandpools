import { VisitedPark } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


interface RecentParkListProps {
    parks: VisitedPark[];
}
const RecentParkList = ({parks}: RecentParkListProps) => (
    <div className="flex flex-col gap-2">
        {parks.map((park) => (
            <div 
            key={park.id}
            className="flex w-full gap-2"
            >
            <div>
                <h2 className="text-xl text-slate-700">{park.parkName}</h2>
            </div>
                <div>
                    {park.liked && (
                    <FontAwesomeIcon
                        icon={faHeart}
                        color="red"
                    />
                    )}
                </div>
            </div>
        ))}
    </div>
)

export default RecentParkList;