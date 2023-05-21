import React, { useEffect } from 'react';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhotoGallery = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <div className='mt-20'>
            <h2 className='text-5xl text-sky-900 font-semibold text-center mb-10'>Sports Gallery</h2>
            <div>
                <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <Gallery className='border' photos={photos} direction={"column"} />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;