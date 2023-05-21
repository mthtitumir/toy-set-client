import React from 'react';
import ban1 from '../../../assets/banner/ban1.jpg'
import ban2 from '../../../assets/banner/ban2.jpg'
import ban3 from '../../../assets/banner/ban3.jpg'
import ban4 from '../../../assets/banner/ban4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full mt-2 rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={ban1} className="w-full" />
                {/* text over banner image */}
                <div className="absolute h-full flex items-center w-4/5 bg-gradient-to-r from-cyan-800 to-[rgba(21, 21, 21, 0)] pl-10">
                    <div className='text-white space-y-5'>
                        <h2 className='text-4xl md:text-7xl md:w-2/3 font-bold '>Best Outdoor Toys for Active Kids!</h2>
                        <p className='text-lg md:w-2/3 '>Ignite Adventure and Fun with Our Exciting Outdoor Toys! Experience Endless Playtime with our Outdoor Toys for Active Kids!</p>
                        <div className='flex gap-4'>
                            <button className="bg-cyan-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Read More</button>
                            <button className="bg-red-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Shop Now</button>
                        </div>
                    </div>
                </div>
                {/* text over banner image */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full rounded-3xl">
                <img src={ban2} className="w-full" />
                {/* text over banner image */}
                <div className="absolute h-full flex items-center w-4/5 bg-gradient-to-r from-cyan-800 to-[rgba(21, 21, 21, 0)] pl-10">
                    <div className='text-white space-y-5'>
                        <h2 className='text-4xl md:text-7xl md:w-2/3 font-bold '>Unleash the Joy of Outdoors!</h2>
                        <p className='text-lg md:w-2/3'>Ignite Adventure and Fun with Our Exciting Outdoor Toys! Experience Endless Playtime with our Outdoor Toys for Active Kids!</p>
                        <div className='flex gap-4'>
                            <button className="bg-cyan-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Read More</button>
                            <button className="bg-red-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Shop Now</button>
                        </div>
                    </div>
                </div>
                {/* text over banner image */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={ban3} className="w-full" />
                {/* text over banner image */}
                <div className="absolute h-full flex items-center w-4/5 bg-gradient-to-r from-cyan-800 to-[rgba(21, 21, 21, 0)] pl-10">
                    <div className='text-white space-y-5'>
                        <h2 className='text-4xl md:text-7xl md:w-2/3 font-bold '>Unleash the Joy of Outdoors!</h2>
                        <p className='text-lg md:w-2/3'>Ignite Adventure and Fun with Our Exciting Outdoor Toys! Experience Endless Playtime with our Outdoor Toys for Active Kids!</p>
                        <div className='flex gap-4'>
                            <button className="bg-cyan-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Read More</button>
                            <button className="bg-red-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Shop Now</button>
                        </div>
                    </div>
                </div>
                {/* text over banner image */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={ban4} className="w-full" />
                {/* text over banner image */}
                <div className="absolute h-full flex items-center w-4/5 bg-gradient-to-r from-cyan-800 to-[rgba(21, 21, 21, 0)] pl-10">
                    <div className='text-white space-y-5'>
                        <h2 className='text-4xl md:text-7xl md:w-2/3 font-bold '>Unleash the Joy of Outdoors!</h2>
                        <p className='text-lg md:w-2/3'>Ignite Adventure and Fun with Our Exciting Outdoor Toys! Experience Endless Playtime with our Outdoor Toys for Active Kids!</p>
                        <div className='flex gap-4'>
                            <button className="bg-cyan-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Read More</button>
                            <button className="bg-red-500 py-2 px-3 rounded-lg text-white uppercase font-semibold text-sm">Shop Now</button>
                        </div>
                    </div>
                </div>
                {/* text over banner image */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;