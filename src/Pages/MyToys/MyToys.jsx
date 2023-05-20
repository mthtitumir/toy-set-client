import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToyrow from './MyToyrow';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const [control, setControl] = useState(false);

    const { user } = useContext(AuthContext);
    const { email, photoURL } = user;

    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5500/toys?seller_email=${email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
            .catch(error => console.log(error))
    }, [control])
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to redo this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5500/toys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setControl(!control);
                        }
                    })


            }
        })
    }
    console.log(myToys[0]?.seller);
    return (
        <div className='mt-20 container mx-auto rounded-lg'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ToySet | My Toys</title>
            </Helmet>
            <div>
                <div className="card w-full md:w-1/3 mx-auto">
                    <figure className='rounded-[50%] border hover:shadow-xl w-1/4 mx-auto'><img src={photoURL ? photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="Shoes" /></figure>
                    <div className="card-body text-center bg-base-100 shadow-xl rounded-lg">
                        <h2 className="font-semibold text-center text-3xl">{myToys[0]?.seller}</h2>
                        <p className='font-semibold text-lg my-3'>Total added products: {myToys?.length}</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold text-center m-5'>Your Products List</h2>
                </div>
            </div>
            <div className='my-8'>
                <div className="overflow-x-auto mt-5">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map(toy => <MyToyrow key={toy._id} handleDelete={handleDelete} toy={toy}></MyToyrow>)
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyToys;