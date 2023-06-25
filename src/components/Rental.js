import React from "react";
import { BsStarFill } from "react-icons/bs";

const Rental = ({ title, image, price }) => {
    return (
        <div className="">
            <div className="relative">
                <div
                    className="grad absolute h-full w-full 
            rounded-b-[1.3rem]"
                ></div>
                <div className="flex">
                    <img
                        src={image}
                        alt=""
                        width={650}
                        height={650}
                        className="object-cover rounded-[1.3rem]"
                    />
                    <div
                        className="absolute text-white
                font-bold bottom-6
                left-6 text-[22px] flex items-center gap-2"
                    >
                        {title}
                        <span>•</span>
                        <p className="text-[18px] text-gray-200">${price}</p>
                    </div>
                </div>
            </div>
            <div className="pt-3 flex justify-between items-start">
                <div className="">
                    <p className="max-w-[17rem] font-semibold text-[17px]">
                        This is a race find.
                    </p>
                    <p
                        className="max-w-[17rem] text-[16px] -mt-1 
                text-gray-500"
                    >
                        May 3 - Dec 18
                    </p>
                    <p className="max-w-[17rem] font-semibold text-[17px]">${price}</p>
                </div>
                <div className="flex items-center space-x-1">
                    <BsStarFill />
                    <p className="text-[15px]">5.0</p>
                </div>
            </div>
        </div>
    );
};

export default Rental;
