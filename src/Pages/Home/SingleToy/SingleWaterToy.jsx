import React from 'react';

const SingleWaterToy = ({ waterToy }) => {
    const { name, price, rating, img } = waterToy;
    return (
        <div className='drop-shadow-xl'>
            <img src={img} alt="" />
            <div className='mt-3 p-3'>
                <h6 className='text-3xl font-semibold'>{name}</h6>
                <div className='flex justify-between font-semibold mt-3 text-lg'>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating} Stars</p>
                </div>
            </div>
            <button className='bg-sky-800 w-full py-3 text-white text-2xl rounded bottom-0'>View Details</button>
        </div>
    );
};

export default SingleWaterToy;