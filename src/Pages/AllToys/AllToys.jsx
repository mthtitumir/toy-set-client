import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(()=>{
        fetch('http://localhost:5500/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    })
    // console.log(toys);
    const handleSearchToys = event =>{
        event.preventDefault();
        const searchQ = event.target.search.value;
        setQuery(searchQ);
        const filteredData = toys.filter(item =>{
             item.name.toLowerCase() == query.toLowerCase();
        })
        setToys(filteredData);
        console.log(filteredData);
    }
    
    return (
        <div className='container mx-auto'>
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

