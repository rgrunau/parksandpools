import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


 const RatingsInput = ({rating, setRating}: {rating: number, setRating: React.Dispatch<React.SetStateAction<number>>}) => (
    <div className="flex flex-col gap-2">
        <div>
            <label htmlFor="park-description">Park Rating</label>
        </div>
        <div className="flex gap-1">
            {[...Array(5)].map((value) => (
                <FontAwesomeIcon 
                    icon={faStar} 
                    key={value}
                    color={value < 1 ? "yellow" : "gray"}
                    onClick={() => setRating(value + 1)}
                />
            ))}
        </div>
    </div>
);

export default RatingsInput;