import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleBlog from './SingleBlog';
import { InfinitySpin } from 'react-loader-spinner';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://toy-set-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='container mx-auto mt-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ToySet | Blogs</title>
            </Helmet>
            <h2 className='text-5xl text-sky-900 font-semibold text-center mb-10'>Blogs</h2>
            <button className='border px-3 py-2'><Link to='/add-a-blog'>Add a Blog</Link></button>
            {
                loading ?
                    <div className='flex items-center justify-center my-8'>
                        <InfinitySpin
                            width='200'
                            color="#4fa94d"
                        />
                    </div>
                    :
                    <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            blogs.map(blog => <SingleBlog blog={blog} key={blog._id}></SingleBlog>)
                        }
                    </div>
            }
        </div>
    );
};

export default Blogs;