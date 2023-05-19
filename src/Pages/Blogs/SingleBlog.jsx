import React from 'react';

const SingleBlog = ({blog}) => {
    const {title, photo, description, author} = blog;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='my-0'>Author: {author}</p>
                <p>{description.slice(0,250)}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;