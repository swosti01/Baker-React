import React, {useRef, useState} from 'react'
import {footer} from "../constant"

const Newsletter = () => {
  const formRef = useRef();
  const [email, setEmail] = useState("")
  const handleChange = (e) => {
    const { target } = e;
    setEmail(target.value)
  };
  return (
    <div className='p-6 sm:pl-0 pb-10'>
      <h2 className='playfair text-2xl pt-4'>
        Newsletter
      </h2>
      <p className='lato text-base font-light leading-8 pt-6 pr-20'>
        Stay up to date with all the latest from 47th Cafe 
      </p>
      <form 
        ref={formRef}
        className='flex flex-col bor'
      >
        <label className='lato text-lg font-light leading-8 pt-5 bor'>
          <span className=''>Email*</span>
          <div>
            <input 
              type="text"
              className='bg-col2 borw mt-1 px-2'
              value={email}
              onChange={handleChange}
            />
            <button className='bg-col2 borw ml-[-1px] w-16'>
              Join
            </button>
          </div>
        </label>
      </form>
    </div>
  )
}

const TalkToUs = () => {
  return (
    <div className='flex flex-col p-6 pb-10'>
      <h2 className='playfair text-2xl py-4 pb-6'>
        Talk to Us
      </h2>
      {footer.talkToUs.text.map((text)=>(
        <p key={text} className='lato text-base font-light leading-8 '>
          {text}
        </p>
      ))}
      
    </div>
  )
}

const SocilaMedia = () => {
  return (
    <div className='flex flex-col gap-5 px-6 py-11'>
      {footer.socialMedia.map((item)=>(
        <div key={item.heading} className='flex bor'>
          <a
            href={item.link}
            className='flex items-center gap-2 lato text-base'
          >
            <img
              src={item.iconURL}
              className='h-6 w-6'
            />
            {item.heading}
          </a>
        </div>
      ))}
    </div>
  )
}

const Footer = () => {
  return (
    <div className='bg-col2 col-w flex flex-col'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:px-10 lg:px-36'>
        <div className=''>
          <Newsletter/>
        </div>
        <div className=''>
          <TalkToUs/>
        </div>
        <div className=''>
          <SocilaMedia/>
        </div>
      </div>
      <div className='lato text-lg font-light p-3 text-center bg-white text-black'>
        {footer.bottomFooter.text}
        <a 
          href={footer.bottomFooter.link}
          className='text-underline'
        >
          React
        </a>
      </div>
    </div>
  )
}

export default Footer