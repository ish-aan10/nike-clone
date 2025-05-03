import React from 'react'
import essentialOne from '../assets/essentials_1.png'
import essentialTwo from '../assets/essentials_2.png'
import essentialThree from '../assets/essentials_3.jpg'

const Essentials = () => {
  return (
    <main className='relative flex flex-col px-10 mt-25 gap-5'>
        <h1 className='text-2xl lg:text-3xl font-semibold'>The Essentials</h1>
        <div className='flex gap-4.5 overflow-x-auto'>
            <div className='flex flex-col gap-5 mb-5'>
                <div className='min-w-[593px]'>
                    <img className='h-[739px] w-full object-coevr' src={essentialOne} alt="" />
                </div>
                <h1 className='text-lg font-bold'>Shox R4</h1>
            </div>
            <div className='flex flex-col gap-5 mb-5'>
                <div className='min-w-[593px]'>
                    <img className='h-[739px] w-full object-cover' src={essentialTwo} alt="" />
                </div>
                <h1 className='text-lg font-bold'>Field General</h1>
            </div>
            <div className='flex flex-col gap-5 mb-5'>
                <div className='min-w-[593px]'>
                    <img className='h-[739px] w-full object-cover' src={essentialThree} alt="" />
                </div>
                <h1 className='text-lg font-bold'>Bags & Backpacks</h1>
            </div>
        </div>
    </main>
  )
}

export default Essentials