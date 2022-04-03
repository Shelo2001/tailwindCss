import React from 'react'

import tbilisi1 from '../assets/tbilisi1.jpg'
import tbilisi2 from '../assets/tbilisi2.jpg'
import tbilisi3 from '../assets/tbilisi3.jpeg'
import tbilisi4 from '../assets/tbilisi4.jpg'
import tbilisi5 from '../assets/tbilisi5.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Places</h1>
      <p className='py-4'>In Georgia</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={tbilisi1} alt='' />
        <img className='w-full h-full object-cover' src={tbilisi2} alt='/' />
        <img className='w-full h-full object-cover' src={tbilisi3} alt='/' />
        <img className='w-full h-full object-cover' src={tbilisi4} alt='/' />
        <img className='w-full h-full object-cover' src={tbilisi5} alt='/' />
      </div>
    </div>
  )
}

export default Destinations
