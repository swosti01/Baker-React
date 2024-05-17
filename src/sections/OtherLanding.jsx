import React from 'react'

const OtherLanding = ({title}) => {
  return (
    <section className='flex flex-col gap-4 px-6 py-12 sm:py-16 lg:py-24 object-cover bg-landing relative mt-0 sm:mt-3 lg:mt-7'>
      <div className='absolute top-0 left-0 h-full w-full bg-w-40'></div>
      <h1 className='playfair text-center text-4xl font-semibold z-[10]'>
        {title}
      </h1>
      <p className=' lato text-center text-base font-semibold z-[10]'>
        Home &#62; <span className='font-normal'>{title}</span>
      </p>
    </section>
  )
}

export default OtherLanding