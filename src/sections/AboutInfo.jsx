import React from 'react'
import { Button } from '../components'
import { aboutInfo } from '../constant'

const AboutInfoSection = ({data, index}) => {
  const { title, paragraph, imgURL, button, link } = data;
  return(
    <div className={`${index%2==0?"sm:flex-row-reverse":"sm:flex-row"} flex flex-col`}>
      <div className='w-full sm:w-1/2 p-6 lg:p-12 sm:px-14 lg:px-28'>
        <h1 className='pt-10 sm:pt-8 lg:pt-11 text-2xl lg:text-5xl playfair font-semibold'>
          {title}
        </h1>
        <p className='pt-6 lg:pt-7 lato text-base leading-6 lg:leading-7'>
          {paragraph}
        </p>
        <div className='py-7 lg:pt-9'>
          <Button name={button} link={link}/>
        </div>
      </div>
      <div className='h-vw sm:h-auto sm:w-1/2'>
        <img
          className='h-full w-full object-cover '
          src={imgURL}
        />
      </div>
    </div>
  )
}
const AboutInfo = () => {
  return (
    <section>
      {aboutInfo.map((data,index)=>(
        <AboutInfoSection key={data.title} data={data} index={index}/>
        // <ImageText key={data.title} data={data} index={index}/>
      ))}
    </section>
  )
}

export default AboutInfo