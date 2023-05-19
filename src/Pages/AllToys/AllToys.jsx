import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';

const AllToys = () => {
    const allToys = useLoaderData();
    // console.log(allToys);
    return (
        <div className='container mx-auto'>
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
                            allToys.map(toy => <ToyTable toy={toy}></ToyTable>)
                        }

                    </tbody>

                </table>
            </div>

        </div >
    );
};

export default AllToys;


