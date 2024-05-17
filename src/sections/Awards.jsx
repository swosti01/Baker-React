import React from 'react'
import { aboutAward } from '../constant'

const Award = ({award}) => {
  const {title, paragraph, imgURL} = award;
  return(
    <div className='flex flex-col gap-6 text-center max-w-[400px] bor'>
      <div className="flex justify-center">
        <img
          src={imgURL}
          className='w-[80px]'
        />
      </div>
      <h2 className='playfair text-xl font-semibold col2'>
        {title}
      </h2>
      <p className='lato text-base leading-6 '>
        {paragraph}
      </p>
    </div>
  )
}
const Awards = () => {
  return (
    <section className='flex flex-col justify-evenly sm:flex-row gap-16 sm:gap-12 lg:gap-12 sm:px-12 px-12 lg:px-24 py-16 sm:py-20 lg:py-28 bor'>
      {aboutAward.map((award)=>(
        <Award key={award.title} award={award}/>
      ))}
    </section>
  )
}

export default Awards