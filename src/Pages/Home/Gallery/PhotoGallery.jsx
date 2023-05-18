import React from 'react';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const PhotoGallery = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl text-sky-900 font-semibold text-center mb-10'>Sports Gallery</h2>
            <div>
                <Gallery className='border' photos={photos} direction={"column"} />
            </div>
        </div>
    );
};

export default PhotoGallery;