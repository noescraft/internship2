import React from 'react'
import house1 from "../assets/house1.jpg"
import Rental from './Rental';

const Rentals = () => {
    const rentals = [
        { title: "BMexico City, Mexico", image: house1, price: "2,499" },
        { title: "BMexico City, Mexico", image: house1, price: "2,499" },
        { title: "BMexico City, Mexico", image: house1, price: "2,499" },
        { title: "BMexico City, Mexico", image: house1, price: "2,499" },
        { title: "BMexico City, Mexico", image: house1, price: "2,499" },
    ];
    return (
        <div className='pt-3 sm:pt-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 lg:grid-cols-4 
            xl:grid-cols-5 gap-4'>
                {rentals.map((rental) => (
                    <Rental
                        title={rental.title}
                        image={rental.image}
                        price={rental.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rentals