import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                    <h1 className=" mb-2 font-semibold text-center text-lg">Or, continue with</h1>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;