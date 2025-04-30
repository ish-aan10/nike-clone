import React from 'react'
import heroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <main className='relative'>
        <div className='flex flex-col gap-2 items-center justify-center px-5'>
            <img className='px-7 mb-6' src={heroImage} alt="" />
            <p className='font-bold'>Nike 24.7 Collection</p>
            <h1 className='font-boldonse text-6xl w-4/5 text-center font-extrabold leading-relaxed'>TAILORED FORALL-DAY COMFORT</h1>
            <p className='font-bold'>All new colours, polished looks, luxurious feels.</p>
            <button className='bg-black text-white px-4.5 py-1.5 mt-4 font-bold text-lg rounded-3xl text-center cursor-pointer hover:opacity-60'>
                Shop
            </button>
        </div>
    </main>
  )
}

export default Hero