import React from 'react'
import featImage1 from '../assets/featured_1.jpg'
import featImage2 from '../assets/featured_2.jpg'

const Featured = () => {
  return (
    <main className='relative px-5 lg:px-10 mt-25 flex flex-col lg:gap-7 gap-4'>
        <h3 className='text-2xl lg:text-3xl font-semibold'>Featured</h3>
        <div className='flex gap-3'>
            <div className='relative lg:h-[905px] lg:w-[950px] h-[440px] w-[465px] overflow-hidden'>
                <img className='object-cover translate-y-[-30px] lg:scale-155 lg:translate-y-[-500px]' src={featImage1} alt="" />
                <div className='absolute bottom-8 left-8 flex flex-col lg:gap-6 items-start gap-4'>
                  <h1 className='text-white font-bold lg:text-xl text-lg'>Strength Takes Sweat</h1>
                  <div className='flex gap-2'>
                    <button className='bg-white py-2 px-3 rounded-3xl font-bold hover:bg-gray-300 cursor-pointer lg:text-base text-sm'>Shop Men's</button>
                    <button className='bg-white py-2 px-3 rounded-3xl font-bold hover:bg-gray-300 cursor-pointer lg:text-base text-sm'>Shop Women's</button>
                  </div>
                </div>
            </div>
            <div className='relative lg:h-[905px] lg:w-[950px] h-[440px] w-[465px] overflow-hidden'>
                <img className='object-cover translate-y-[-80px] lg:translate-y-[-120px] lg:scale-115' src={featImage2} alt="" />
                <div className='absolute bottom-8 left-8 flex flex-col lg:gap-5 items-start gap-4'>
                  <p className='text-white font-semibold lg:text-lg text-base'>In Your Air Max Era</p>
                  <h1 className='text-white font-bold lg:text-xl text-lg'>Max Out Your World</h1>
                  <div className='flex gap-2'>
                    <button className='bg-white py-2 px-3 rounded-3xl font-bold hover:bg-gray-300 cursor-pointer lg:text-base text-sm'>Shop Men's</button>
                    <button className='bg-white py-2 px-3 rounded-3xl font-bold hover:bg-gray-300 cursor-pointer lg:text-base text-sm'>Shop Women's</button>
                  </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Featured