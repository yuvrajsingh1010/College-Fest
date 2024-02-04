import React from 'react'

const EventCard = ({name,price,form}) => {
  return (
    <div className='w-full md:w-2/5 flex justify-between items-center p-4 rounded-xl bg-white text-secondary gap-10'>
      <p className='poppins-semibold'>
        {name}
      </p>
      <button className='rounded-3xl text-white p-1 px-2 bg-secondary w-36'>Register now</button>
    </div>
  )
}

export default EventCard
