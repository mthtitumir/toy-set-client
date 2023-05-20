import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { _id, name, seller, seller_email, img, subcategory, price, rating, quantity, description } = toy;
    return (
        <div className='mt-20 container mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ToySet | Details</title>
            </Helmet>
            <div className='grid md:grid-cols-2 p-3 gap-5 w-3/4 mx-auto'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className=' flex justify-center items-center'>
                    <div>
                        <h2 className='text-3xl font-semibold'>Product: {name}</h2>
                        <p className='font-semibold my-3'>Seller: {seller}</p>
                        <p className='font-semibold my-3'>Seller Email: {seller_email}</p>
                        <h2 className='text-xl my-3 font-semibold'>Price: ${price}</h2>
                        <h2 className='text-xl my-3 font-semibold'>Rating: {rating}</h2>
                        <h2 className='text-xl my-3 font-semibold'>Quantity: {quantity}</h2>
                        <p className='my-5 '>{description}</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div></div>
        </div>
    );
};

export default ToyDetails;