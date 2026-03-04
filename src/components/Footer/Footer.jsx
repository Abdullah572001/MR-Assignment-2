import React from 'react';
import inLogo from '../../assets/fi_145807.png'
import facebookLogo from '../../assets/fi_5968764.png'
import mailLogo from '../../assets/fi_6244710.png'
import xLogo from '../../assets/Group.png'

const Footer = () => {
    return (
        <div className='max-w-350 mx-auto px-3 lg:px-0'>
            <div className='flex flex-col lg:flex-row gap-10 justify-between'>
                <div className='text-white space-y-3'>
                    <h2 className='text-2xl font-bold'>CS — Ticket System</h2>
                    <p className='text-xs text-gray-400'>Customer Support Zone is your all-in-one platform for <br className='hidden lg:block' /> managing and resolving customer issues efficiently. Track tickets,<br className='hidden lg:block' /> monitor priority levels, and ensure timely responses — all <br className='hidden lg:block' /> in one place. Our streamlined dashboard empowers support teams <br className='hidden lg:block' /> to deliver faster, smarter, and more personalized service to <br className='hidden lg:block' /> every customer, every time.</p>
                </div>
                <div className='text-white space-y-3'>
                    <h2 className='text-xl font-bold'>Company</h2>
                    <ul className='text-xs text-gray-400 space-y-3'>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div className='text-white space-y-3'>
                    <h2 className='text-xl font-bold'>Services</h2>
                    <ul className='text-xs text-gray-400 space-y-3'>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div className='text-white space-y-3'>
                    <h2 className='text-xl font-bold'>Information</h2>
                    <ul className='text-xs text-gray-400 space-y-3'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div className='text-white space-y-3'>
                    <h2 className='text-xl font-bold'>Social Links</h2>
                    <ul className='text-xs text-gray-400 space-y-3'>
                        <li className='flex gap-2'><img src={xLogo} alt="" />@CS — Ticket System</li>
                        <li className='flex gap-2'><img src={inLogo} alt="" />@CS — Ticket System</li>
                        <li className='flex gap-2'><img src={facebookLogo} alt="" />@CS — Ticket System</li>
                        <li className='flex gap-2'><img src={mailLogo} alt="" />support@cst.com</li>
                    </ul>
                </div>
                
            </div>

            <hr className='border-gray-600 mt-10 mb-6' />

            <p className='text-xs text-gray-400 text-center'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    );
};

export default Footer;