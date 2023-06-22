import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface ParkVisitsProps {
    visits: number;
    addVisit: () => void;
    subtractVisit: () => void;
}
const ParkVisits = ({ visits, addVisit, subtractVisit }: ParkVisitsProps) => (
    <div className="w-1/2 flex items-center">
        <div className="w-1/2 text-xl">
            Visits: {visits}
        </div>
        <div className="flex items-center justify-between w-1/2">
            <div>
                <button
                    type='button'
                    aria-label="add visit"
                    className='bg-sky-500 text-slate-50 rounded-md p-2'
                    onClick={addVisit }
                >
                    <FontAwesomeIcon
                        className='w-6 h-4'
                        icon={faPlus}
                    />
                </button>
            </div>
            <div className="ml-2">
                <button
                    type='button'
                    aria-label="add visit"
                    className='bg-sky-500 text-slate-50 rounded-md p-2'
                    onClick={subtractVisit }
                >
                    <FontAwesomeIcon
                        className='w-6 h-4'
                        icon={faMinus}
                    />
                </button>
            </div>
        </div> 
    </div>
);

export default ParkVisits;