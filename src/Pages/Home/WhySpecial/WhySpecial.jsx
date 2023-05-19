import React from 'react';
import { FaPlay } from 'react-icons/fa';

const WhySpecial = () => {
    return (
        <div className='grid md:grid-cols-2 my-10'>
            <div className='relative'>
                <figure className='w-3/4'><img className='rounded-xl w-full' src="https://i.pinimg.com/564x/5b/c4/db/5bc4db3d90a2c468015c0d8ae9d5d64b.jpg" alt="" /></figure>
                <figure className='w-2/5 absolute -translate-x-[50%] -translate-y-[50%] left-[75%] top-[50%]'><img className='w-full' src="https://freepngimg.com/download/play_button/25746-6-play-button.png" alt="" /></figure>
            </div>
            <div>
                <div>
                    <h2 className='text-5xl text-sky-900 font-semibold text-center'>Why We are special</h2>
                    <p className='text-xl font-semibold mt-5'>We are dedicated to providing you with a vast selection of top-quality sports equipment and gear that will elevate your game to new heights. Whether you're a seasoned athlete or just starting your fitness journey, we have everything you need to excel in your chosen sport.</p>
                </div>
                <div className='mt-5 text-lg flex justify-around'>
                    <div>
                        <p><FaPlay className='inline text-sky-600'></FaPlay> Quality Items</p>
                        <p><FaPlay className='inline text-sky-600'></FaPlay> Richest Collection</p>
                        <p><FaPlay className='inline text-sky-600'></FaPlay> Reasonable Prices</p>
                    </div>
                    <div>
                        <p><FaPlay className='inline text-sky-600'></FaPlay> Quality Items</p>
                        <p><FaPlay className='inline text-sky-600'></FaPlay> Richest Collection</p>
                        <p><FaPlay className='inline text-sky-600'></FaPlay> Reasonable Prices</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <h2 className='text-sky-900 font-semibold text-2xl'>Customer Satisfaction</h2>
                    <progress className="progress progress-primary w-full" value="95" max="100"></progress>
                </div>
                <div className='mt-5 flex gap-6'>
                    <button className='border px-3 py-2 rounded-lg bg-cyan-500 text-white uppercase font-semibold'>See More</button>
                    <button className='border px-3 py-2 rounded-lg bg-cyan-500 text-white uppercase font-semibold'>contact us</button>
                </div>
            </div>
        </div>
    );
};

export default WhySpecial;