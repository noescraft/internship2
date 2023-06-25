import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';



const Footer = () => {
    const icons = [<BsTwitter />, <BsFacebook />,
    <BsInstagram />, <BsYoutube />,];
    return (
        <div className='bg-white border-t-2 shadow-md
    shadow-gray-300 sticky 
    bottom-0 h-20 w-full flex items-center justify-center gap-6'>
            {icons.map((icon) => (
                <div className='text-[30px] text-gray-600 
                hover:text-black duration-200 ease-out'>{icon}</div>
            ))}
        </div>
    )
}

export default Footer;