import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../Gallery/PhotoGallery';
import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <ShopCategory></ShopCategory>
        </div>
    );
};

export default Home;