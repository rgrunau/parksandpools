import Link from 'next/link'

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'


interface LinkCTAProps {
    href: string;
    icon: FontAwesomeIconProps['icon'];
    text: string;
}

const LinkCTA = ({ href, icon, text }: LinkCTAProps) => (
    <Link 
        className="text-slate-50 bg-primary-blue py-2 px-1 rounded-lg flex justify-center items-center gap-2"
        href={href}
    >
        
        <div className="w-1/12">
            <FontAwesomeIcon 
                className="text-slate-50"
                icon={icon} 
            />
        </div>
        <div className="w-3/4">
            {text}
        </div>
    </Link>
);

export default LinkCTA;