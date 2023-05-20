import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import app from '../../../firebase/firebase.init';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { user, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                if (result?.user) {
                    navigate(from, {replace: true})
                    Swal.fire({
                        icon: 'success',
                        title: 'Welcome!',
                        text: 'Login Successful!',
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Try Again...',
                    text: 'Something went wrong!',
                })
            })
        form.reset();
    }
    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, {replace: true})
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ToySet | Login</title>
            </Helmet>
            <div className="hero-content flex">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover font-semibold">Don't have an account? <span>Please Register</span></Link>
                            </label>
                        </div>
                        <div className="form-control mt-1">
                            <input type='submit' className="btn btn-primary" value='Login' />
                        </div>
                    </form >
                    <h1 className=" mb-2 font-semibold text-center text-lg">Or, Login with</h1>
                    <div className='mb-5 mx-auto'>
                        <button onClick={handleGoogleLogIn}><FaGoogle className='text-5xl text-red-700 border rounded-[50%] p-2 hover:drop-shadow'></FaGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;