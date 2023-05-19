import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../Gallery/PhotoGallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import WhySpecial from '../WhySpecial/WhySpecial';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <ShopCategory></ShopCategory>
            <WhySpecial></WhySpecial>
        </div>
    );
};

export default Home;