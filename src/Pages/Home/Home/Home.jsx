import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../Gallery/PhotoGallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import WhySpecial from '../WhySpecial/WhySpecial';
import CustomerReview from '../CustomerReview/CustomerReview';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ToySet | Home</title>
            </Helmet>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <ShopCategory></ShopCategory>
            <WhySpecial></WhySpecial>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;