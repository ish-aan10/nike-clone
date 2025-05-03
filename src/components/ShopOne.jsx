import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import productData from '../assets/products/products'

const ShopOne = () => {
  return (
    <main className='relative px-5 lg:px-10 mt-25 flex flex-col lg:gap-7 gap-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl lg:text-3xl font-semibold'>Shop Liverpool F.C.</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold'>Shop</p>
                <i className='bg-gray-200 py-2.5 px-4 pr-4.5 rounded-full'><FontAwesomeIcon icon={faLessThan} /></i>
                <i className='bg-gray-200 py-2.5 px-4 pr-4.5  rounded-full'><FontAwesomeIcon icon={faGreaterThan} /></i>
            </div>
        </div>
        <div className='overflow-x-auto flex gap-3'>
            {productData.map((product)=> {
                return (
                    <div className='flex flex-col gap-3 mb-4'>
                        <div className='min-w-[669px]'>
                            <img className='h-[669px]' src={product.image} alt="" />
                        </div>
                        <div className='flex flex-col gap-0.5'>
                            <h2 className='text-lg font-bold'>{product.name}</h2>
                            <h3 className='text-gray-500 text-sm font-semibold'>{product.subname}</h3>
                            <p className='font-bold'>MRP : &#8377; {product.price.toLocaleString('en-IN', { minimumFractionDigits: 2})}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </main>
  )
}

export default ShopOne