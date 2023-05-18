import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../Gallery/PhotoGallery';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;