import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: '',
                text: "Password didn't match"
            })
            return;
        };
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: '',
                text: "Password must be at least 6 characters!"
            })
            return;
        };
        createUser(email, password)
            .then(result => {
                if (result?.user) {
                    if (result?.user) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Welcome!',
                            text: 'Registration Successful!',
                        })
                    }
                }
            })
            .catch(error => {
                if (result?.user) {
                    Swal.fire({
                        icon: 'error',
                        title: 'OOpss!',
                        text: 'Registration Failed!',
                    })
                }
            })
        form.reset();
        console.log(name, email, password, confirmPassword);

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ToySet | Register</title>
            </Helmet>
            <div className="hero-content flex">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover font-semibold">Already have an account? <span>Please Login</span></Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <input value='Register' type='submit' className="btn btn-primary" />
                        </div>
                    </form>                   
                </div>
            </div>
        </div>
    );
};

export default Register;