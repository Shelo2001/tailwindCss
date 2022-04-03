import React from 'react'

import tbilisi1 from '../assets/tbilisi1.jpg'
import tbilisi2 from '../assets/tbilisi2.jpg'
import tbilisi3 from '../assets/tbilisi3.jpeg'
import tbilisi4 from '../assets/tbilisi4.jpg'
import tbilisi5 from '../assets/tbilisi5.jpg'
import tbilisi6 from '../assets/tbilisi6.jpg'
import SelectsCard from './SelectsCard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCard bg={tbilisi1} text='Tbilisi' />
      <SelectsCard bg={tbilisi2} text='Svaneti' />
      <SelectsCard bg={tbilisi3} text='Tbilisi' />
      <SelectsCard bg={tbilisi4} text='Batumi' />
      <SelectsCard bg={tbilisi5} text='Vardzia' />
      <SelectsCard bg={tbilisi6} text='Kazbegi' />
    </div>
  )
}

export default Selects
