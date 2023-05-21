import React from 'react';
import { useForm } from "react-hook-form";
import './AddAToy.css'
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddAToy = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://toy-set-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    Swal.fire(
                        'Toy Added',
                        'You Added a New Toy!',
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
                <title>ToySet | Add a Toy</title>
            </Helmet>
            {/* hook form   */}
            <div className='bg-sky-300 rounded-xl shadow-2xl w-full lg:w-1/2  mt-20 py-10 mx-auto'>
                <h2 className='text-3xl text-sky-900 font-semibold text-center mb-7'>Add a Toy</h2>
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

export default AddAToy;