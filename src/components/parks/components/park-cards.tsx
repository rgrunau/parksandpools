import Link  from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { VisitedPark } from "@prisma/client";

interface ParksCardProps {
    park: VisitedPark;
}
const ParksCard = ({park }: ParksCardProps) => (
    <Link href={`/parks/${park.id}`} className={`w-full p-2 my-2 drop-shadow-lg rounded-lg border-2 ${park.liked ? 'border-primary-red' :'border-slate-400}'}`}>
        <div className="w-full flex flex-col items-center justify-between  py-2">
            <div className="w-full flex items-center justify-between border-b-2 border-b-slate-400">
                <div>
                    <h3 className="text-xl text-primary-red">{park.parkName}</h3>
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
            <div className="w-full py-2">
                <p className="text-lg text-slate-800">
                    {park.notes}
                </p>
            </div>
        </div>
    </Link>
)


export default ParksCard;