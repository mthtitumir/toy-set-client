import React from 'react';
import { Link } from 'react-router-dom';
import SingleReview from './SingleReview';

const CustomerReview = () => {
    return (
        <div className='my-10 mx-3'>
            <h2 className='text-5xl text-sky-900 font-semibold text-center'>Testimonials</h2>
            <button className='border px-3 py-1 rounded-lg uppercase hover:bg-sky-600 hover:text-white mt-5 font-semibold'><Link to='/post-review'>Post a Review</Link></button>

            <div className='mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <SingleReview></SingleReview>
                <SingleReview></SingleReview>
                <SingleReview></SingleReview>
            </div>
        </div>
    );
};

export default CustomerReview;