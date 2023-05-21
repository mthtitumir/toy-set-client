import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';
import { AuthContext } from '../../provider/AuthProvider';
import { InfinitySpin } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

const AllToys = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        fetch('https://toy-set-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
            }
            )

    })
    // console.log(toys);
    const handleSearchToys = event => {
        event.preventDefault();
        const searchQ = event.target.search.value;
        setQuery(searchQ);
        const filteredData = toys.filter(item => {
            return item.name.toLowerCase().includes(query.toLowerCase());
        })
        setToys(filteredData);
        console.log(filteredData);
    }
    if (loading) {
        return <div className='flex items-center justify-center my-8'>
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </div>;
    }

    return (
        <div className='container mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ToySet | All Toy</title>
            </Helmet>
            <form onSubmit={handleSearchToys} className='mt-5 flex justify-center gap-2'>
                <input type="text" className='text-center' name='search' placeholder='Search toys' />
                <input className='hover:bg-sky-500 font-semibold uppercase' value='Search' type="submit" />
            </form>
            <div className="overflow-x-auto mt-5">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyTable key={toy._id} toy={toy}></ToyTable>)
                        }

                    </tbody>

                </table>
            </div>

        </div >
    );
};

export default AllToys;


