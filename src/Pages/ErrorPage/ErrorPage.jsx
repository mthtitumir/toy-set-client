import React from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div class="flex justify-center items-center h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ToySet | 404 Error</title>
            </Helmet>
            <div class="text-center relative">
                <figure>
                    <img src="https://inzonedesign.com/wp-content/uploads/2021/02/blog-404-funny-error-pages.jpg" alt="" />
                </figure>
                <div className=" absolute top-6 left-0">
                    <div className='text-3xl flex items-center font-bold mb-8'>
                        <FaArrowLeft className='mr-3'></FaArrowLeft>Back to <Link className='text-red-600' to='/'>Homepage</Link>?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;