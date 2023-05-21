import React, { useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Rating from 'react-rating';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleReview = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className="card w-full p-5 md:p-1">
                <figure className='rounded-[50%] border hover:shadow-xl p-3 w-2/5 mx-auto'><img src="https://i.ibb.co/Np26ZRD/electric-cruiser.jpg" alt="Shoes" /></figure>
                <div className="card-body text-center bg-base-100 shadow-xl rounded-lg">
                    <h2 className="font-semibold text-center text-3xl">Mr Rakib</h2>
                    <p className='font-semibold my-3'>"Unmatched comfort and functionality! These products enhance my performance and take my sports experience to the next level. Highly recommended!"</p>
                    <div className="card-actions justify-center">
                        <Rating
                            className='text-2xl'
                            readonly
                            placeholderRating={3.5}
                            emptySymbol={<AiOutlineStar></AiOutlineStar>}
                            placeholderSymbol={<AiFillStar className='text-orange-500'></AiFillStar>}
                            fullSymbol={<AiFillStar className='text-orange-500'></AiFillStar>}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleReview;
