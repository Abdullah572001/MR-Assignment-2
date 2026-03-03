import React from 'react';

const Navbar = () => {
    return (
        <div className='max-w-350 mx-auto flex items-center justify-between py-4 px-3 lg:px-0'>
            <h2 className='text-2xl font-bold'>CS — Ticket System</h2>

            <div className='flex items-center gap-6 font-medium'>
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6'>
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Changelog</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>
                </ul>
                </div>

                <button className='btn bg-[linear-gradient(135deg,#632EE3_0%,#9F62F2_100%)] text-white'>+ New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;