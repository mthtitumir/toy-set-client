import React from 'react';
import { Link } from 'react-router-dom';

const MyToyrow = ({ toy, handleDelete, handleEdit }) => {
    const { _id, subcategory, price, quantity, name } = toy;
    
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{subcategory}</td>
                <td>$ {price}</td>
                <td>{quantity}</td>
                <td><Link to={`/toys/edit-a-toy/${_id}`}><button className='uppercase font-bold bg-teal-700 px-3 py-1 rounded text-white hover:bg-teal-500'>Edit</button></Link></td>
                <td><button  onClick={()=>{handleDelete(_id)}}  className='uppercase font-bold bg-red-700 px-3 py-1 rounded text-white hover:bg-red-500'>Delete</button></td>
                <td><Link to={`/toys/${_id}`}><button className='uppercase font-bold bg-teal-700 px-3 py-1 rounded text-white hover:bg-teal-500'>Details</button></Link></td>
               
            </tr>
        </>
    );
};

export default MyToyrow;