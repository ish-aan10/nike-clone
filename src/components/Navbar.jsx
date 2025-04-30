import React from 'react'

const Navbar = () => {
  return (
    <main className='relative'>
        <div className='flex justify-between items-center bg-gray-200 py-3 px-10'>
            <i>Jordan Logo</i>
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
        <div className='flex justify-between items-center py-3.5 px-10'>
            <i>Nike Logo</i>
            <ul className='flex gap-3 font-semibold '>
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>SNKRS</li>
            </ul>
            <div className='flex gap-2'>
                <i>Search</i>
                <i>Favorites</i>
                <i>Cart</i>
            </div>
        </div>
    </main>
  )
};

export default Navbar;