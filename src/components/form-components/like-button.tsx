import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react';

interface LikeButtonProps {
    like: boolean;
    setLike: MouseEventHandler<HTMLButtonElement>;
}
 export function LikeButton ({like, setLike}: LikeButtonProps) {
    return(
        <div className="w-full lg:w-1/3 gap-2">
            <button
                type='button' 
                className="flex gap-1"
                onClick={setLike}
            >
                <FontAwesomeIcon 
                    className='w-8 h-8'
                    aria-label='like park'
                    icon={faHeart} 
                    color={like === true ? "red" : "gray"}
                />
            </button>
        </div>
    );
 } 

