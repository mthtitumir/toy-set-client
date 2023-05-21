import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditMyToy = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { id } = useParams();
    // console.log(id);
    const onSubmit = data => {
        console.log(data)
        fetch(`https://toy-set-server.vercel.app/toys/update-toy/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount) {
                    Swal.fire(
                        'Toy Updated',
                        'You Updated the Toy!',
                        'success'
                    )
                    reset();
                }
            })
    };


    return (
        <div className='container mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ToySet | Edit your Toy</title>
            </Helmet>
            {/* hook form   */}
            <div className='bg-sky-300 rounded-xl shadow-2xl w-full lg:w-1/2  mt-20 py-10 mx-auto'>
                <h2 className='text-3xl text-sky-900 font-semibold text-center mb-7'>Edit Toy</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-5 justify-center'>
                        <input placeholder='Product Id'{...register("id")} />
                        <input placeholder='Product Name'{...register("name")} />
                    </div>
                    <div className='flex gap-5 justify-center my-5 p-2'>
                        <input placeholder='Seller Name'{...register("seller")} />
                        <input type='email' placeholder='Seller Email'{...register("seller_email")} />
                    </div>
                    <div className='flex gap-5 justify-center my-5 p-2'>
                        <input placeholder='PhotoUrl'{...register("img")} />
                        <input placeholder='Sub-Category'{...register("subcategory")} />
                    </div>
                    <div className='flex gap-5 justify-center my-5 p-2'>
                        <input placeholder='Price'{...register("price")} />
                        <input placeholder='Rating'{...register("rating")} />
                    </div>
                    <div className='flex gap-5 justify-center my-5 p-2'>
                        <input placeholder='Quantity'{...register("quantity")} />
                        <input type='textarea' placeholder='Description'{...register("description")} />
                    </div>

                    <div className='text-center'>
                        <input className='uppercase font-semibold bg-white' type="submit" />
                    </div>
                </form>
            </div>

            {/* hook form   */}
        </div>
    );
};

export default EditMyToy;