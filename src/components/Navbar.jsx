import React, { useEffect, useState } from 'react'
import jordanLogo from '../assets/icons/jordan_logo.png'
import nikeLogo from '../assets/icons/nike_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping'

const Navbar = () => {
    const [showFirst, setShowFirst]= useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst((prev) => !prev);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className='relative'>
            <div className='flex justify-between items-center bg-gray-100 py-2 px-12'>
                <img className='h-7' src={jordanLogo} alt="Jordan Logo" />
                <ul className='flex gap-2 font-semibold text-sm'>
                    <li>Find a Store</li>
                    <hr className='h-5 border-1' />
                    <li>Help</li>
                    <hr className='h-5 border-1' />
                    <li>Join Us</li>
                    <hr className='h-5 border-1' />
                    <li>Sign In</li>
                </ul>
            </div>
            <div className='flex justify-between items-center px-10'>
                <img className='w-18' src={nikeLogo} alt="Nike Logo" />
                <ul className='text-lg flex gap-3 font-semibold '>
                    <li>New & Featured</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sale</li>
                    <li>SNKRS</li>
                </ul>
                <div className='text-xl flex gap-3 text-gray-700'>
                    <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                    <i><FontAwesomeIcon icon={faHeart} /></i>
                    <i><FontAwesomeIcon icon={faBagShopping} /></i>
                </div>
            </div>
            <div className='relative overflow-hidden h-20 py-3.5 px-10 bg-gray-100'>
                <div className={
                    "absolute inset-0 flex flex-col gap-1 items-center justify-center transition-transform duration-500 " +
                    (showFirst ? "translate-x-0" : "-translate-x-full")
                }>
                    <h4 className='font-semibold'>New Styles On Sale: Up To 40% Off</h4>
                    <p className='text-xs font-bold underline'>Shop All Our New Markdowns</p>
                </div>
                <div className={
                    "absolute inset-0 flex flex-col gap-0.5 items-center justify-center transition-transform duration-500 " +
                    (showFirst ? "translate-x-full" : "translate-x-0")
                }>
                    <h4 className='font-semibold'>Move, Shop, Customize & Celebrate With Us</h4>
                    <p className='text-xs'>No matter what you feel like doing today, it's better as a Member.</p>
                    <p className='text-sm font-bold underline'>Join Us</p>
                </div>
            </div>
        </main>
    )
};

export default Navbar;