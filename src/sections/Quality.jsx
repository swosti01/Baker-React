import React from 'react'
import { aboutQualtiy } from '../constant'

const SingleQualtiy = ({item}) => {
  const {title, icon, text} = item;
  return (
    <div className='flex flex-col gap-4 text-center bor'>
      <div className="flex justify-center">
        <img
          src={icon}
          className='w-[70px]'
        />
      </div>
      <h2 className='playfair text-xl font-semibold col2'>
        {title}
      </h2>
      <p className='lato text-base leading-6 text-gray-600'>
        {text}
      </p>
    </div>
  )
}

const Quality = () => {
  return (
    <section className='flex flex-col sm:flex-row gap-16 sm:gap-6 lg:gap-12 sm:px-12 px-12 lg:px-24 py-16 sm:py-20 lg:py-28 bor'>
      {aboutQualtiy.map((item)=>(
        <SingleQualtiy key={item.title} item={item}/>
      ))}
    </section>
  )
}

export default Quality