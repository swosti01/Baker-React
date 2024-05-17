import React from 'react'
import { foods } from '../constant'
import { Button } from '../components';

const FoodSection = ({item, index}) => {
  const {heading, subHeading, paragraph, imgURL, button, link} = item;
  return(
    <div className={`${index%2==0?"sm:flex-row-reverse":"sm:flex-row"} flex flex-col`}>
      <div className='w-full sm:w-1/2 p-6 lg:p-12 sm:px-14 lg:px-28'>
        <h1 className='pt-10 sm:pt-8 lg:pt-11 text-6xl lg:text-7xl playfair font-semibold'>
          {heading}
        </h1>
        <p className='pt-6 lg:pt-8 lato text-base lg:text-lg font-medium'>
          {subHeading}
        </p>
        <p className='pt-6 lg:pt-7 lato text-base leading-6 lg:leading-7'>
          {paragraph}
        </p>
        <div className='py-7 lg:pt-9'>
          <Button name={button} link={link}/>
        </div>
      </div>
      <div className='h-vw sm:h-auto sm:w-1/2'>
        <img
          className='h-full object-cover'
          src={imgURL}
        />
      </div>
    </div>
  )
}

const Foods = () => {
  return (
    <section>
      {foods.map((item,index)=>(
        <FoodSection key={item.heading} item={item} index={index} />
      ))}
    </section>
  )
}

export default Foods

