import React from 'react'
import { testomonial } from '../constant'
import { quoteLeft, quoteRight } from '../assets/icons';

const Testimonial = ({data}) => {
  const {name, text, imgURL} = data;
  return (
    <div className=' bor'>
      <div className='flex flex-row items-center justify-center playfair text-7xl '>
        <div className='w-[60px] sm:w-[40px] lg:w-[60px] bor'>
          <img src={quoteLeft} className='w-full'/>
        </div>
        <div className='w-[120px] sm:w-[80px] lg:w-[120px] bg-col3 p-[10px] overflow-hidden rounded-full border-2 border-slate-800'>
          <img src={imgURL} className='w-full'/>
        </div>
        <div className='w-[60px] sm:w-[40px] lg:w-[60px]'>
          <img src={quoteRight} className='w-full'/>
        </div>
      </div>
      <div className='text-lg sm:text-sm lg:text-lg bg-slate-400 text-center rounded-2xl p-5 sm:p-3 lg:p-5 pt-[70px] sm:pt-[50px] lg:pt-[70px] mt-[-60px] sm:mt-[-45px] lg:mt-[-60px] leading-7'>
        <div className='playfair text-center text-lg sm:text-base lg:text-lg font-semibold py-2'>
          {name}
        </div>
        {text}
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className='flex flex-col sm:flex-row gap-16 sm:gap-6 lg:gap-12 sm:px-12 px-12 lg:px-24 pb-20 bor'>
      {testomonial.map((data,index)=>(
        <Testimonial key={data.name+index} data={data}/>
      ))}
    </section>
  )
}

export default Testimonials