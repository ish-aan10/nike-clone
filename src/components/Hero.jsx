import React from 'react'
import heroImage from '../assets/hero.png'
import heroImage2 from '../assets/hero_mobile.png'

const Hero = () => {
  return (
    <main className='relative px-5 lg:px-10'>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <img className='hidden sm:block mb-6' src={heroImage} alt="" />
            <img className='block sm:hidden mb-6' src={heroImage2} alt="" />
            <p className='font-semibold'>Nike 24.7 Collection</p>
            <h1 className='font-boldonse lg:text-6xl sm:text-2xl w-4/5 text-center font-extrabold leading-relaxed'>TAILORED FORALL-DAY COMFORT</h1>
            <p className='font-semibold'>All new colours, polished looks, luxurious feels.</p>
            <button className='bg-black text-white px-4.5 py-1.5 mt-4 font-bold text-lg sm:text-base rounded-3xl text-center cursor-pointer hover:opacity-60'>
                Shop
            </button>
        </div>
    </main>
  )
}

export default Hero