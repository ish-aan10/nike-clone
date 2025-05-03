import React from 'react'
import gearUp from '../assets/gearup.png'

const GearUp = () => {
  return (
    <main className='relative px-5 lg:px-10 mt-25'>
        <h1 className='text-2xl lg:text-3xl font-semibold mb-5'>Gear Up</h1>
        <div className='flex flex-col gap-3 items-center justify-center'>
            <img className='mb-3' src={gearUp} alt="" />
            <h2 className='font-boldonse lg:text-6xl text-2xl w-4/5 text-center font-extrabold leading-relaxed'>THE DREAM IS REAL</h2>
            <p className='font-semibold'>Every goal is within reach in the Kylian Mbapp&eacute; Mercurial Superfly.</p>
            <button className='bg-black text-white px-4.5 py-1.5 mt-4 font-bold text-lg sm:text-base rounded-3xl text-center cursor-pointer hover:opacity-60'>
                Shop
            </button>
        </div>
    </main>
  )
}

export default GearUp