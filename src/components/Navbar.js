import React from 'react'
import logo1 from "../assets/logo1.png";
import { BiWorld } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";


const Navbar = () => {
    return (
        <div className='border-b sticky top-0 z-50 bg-white/[95%]'>
            <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12">
                {/* Left */}
                <nav>
                    <div className="h-20 flex">
                        <img src={logo1} alt='' className="object-cover -my-10" />
                    </div>
                </nav>
                {/* Middle */}
                <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full">
                    <input className="py-2.5 w-[20rem] rounded-full outline-0" />
                    <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
                        <button className='w-full'>Place</button>
                        <button className='border-1 border-x px-4'>Time</button>
                        <button className='w-full text-gray-600/60 pl-2'>Group Size</button>
                    </div>
                    <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
                        <BiSearch className="text-white w-full" />
                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center pr-3 font-semibold text-gray-600">
                    <p className='text-[17px]'>Rent House</p>
                    <div className='flex items-center mx-8 gap-1'>
                        <BiWorld className='' />
                        <div className=''>EN</div>
                    </div>


                </div>

            </div>
        </div>

    )
}

export default Navbar