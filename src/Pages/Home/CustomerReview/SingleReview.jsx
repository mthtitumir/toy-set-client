import React from 'react';

const SingleReview = () => {
    return (
        <div className='relative'>
            <div className='border bg-sky-300 px-5 py-8 w-full h-64'>
                <h2 className='text-center'>Tisla Lane</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas magni enim amet laboriosam ipsa est maxime aliquid vero itaque obcaecati, suscipit vel nemo illum veniam maiores iure aliquam sunt!</p>
                <h1>5star</h1>
                
            </div>
            <figure className='w-1/3 rounded-[50%] absolute -translate-x-[50%] -translate-y-[50%] top-[50%]'>
                <img className='' src="https://i.ibb.co/Np26ZRD/electric-cruiser.jpg" alt="" />
            </figure>
        </div>
    );
};

export default SingleReview;