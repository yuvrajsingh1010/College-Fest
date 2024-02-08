import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center p-4 py-10 gap-3'>
      <h1 className="poppins-bold text-white text-xl">
        SHIKHAR<span className="text-secondary">S24</span>
      </h1>
      <hr className='w-full text-white border-white md:hidden'/>
      <p className='text-white poppins-regular text-sm'>© Shikhar 2024. All right reserved.</p>
    </div>
  )
}

export default Footer
