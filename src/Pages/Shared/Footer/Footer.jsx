import React from 'react';
import logo from '../../../assets/logo/T.png'

const Footer = () => {
    return (
        <div className="container mx-auto bg-base-200">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className='flex items-center gap-5'>
                    <img className='h-40 rounded-[50%]' src={logo} alt="" />
                    <p className='text-center font-semibold text-2xl'>ToySet Ltd.<br />Your Destination for Sports Gear</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;