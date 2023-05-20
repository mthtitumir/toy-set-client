import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';

const SingleWaterToy = ({ waterToy }) => {
    const {user} = useContext(AuthContext);
    const { _id, name, price, rating, img } = waterToy;
    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                title: 'Please Login?',
                text: "You have to log in first to view details",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes, Proceed!'
            }).then()
        }
    }
    return (
        <div className='drop-shadow-xl'>
            <img src={img} alt="" />
            <div className='mt-3 p-3'>
                <h6 className='text-3xl font-semibold'>{name}</h6>
                <div className='flex justify-between font-semibold mt-3 text-lg'>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating} Stars</p>
                </div>
            </div>
            <Link to={`/toys/${_id}`}><button onClick={handleViewDetails} className='bg-sky-800 w-full py-3 text-white text-2xl rounded bottom-0'>View Details</button></Link>
        </div>
    );
};

export default SingleWaterToy;