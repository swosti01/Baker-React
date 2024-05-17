import React, { useState } from 'react'
import {bars, times, profile} from "../assets/icons"
import { navigation } from '../constant'



const Navigation = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='bg-col3 bor z-50 fixed w-full '>
      <div className='flex justify-between max-w-screen-2xl px-5 sm:px-12 py-4 lg:py-6'>
        <div className='bor'>
          <img 
            src={navigation.logo.imgURL}
            className='w-[50px] sm:w-[70px]'
          />
        </div>
        <ul className='hidden sm:flexmid gap-5 lg:gap-12 lato text-base bor'>
          {navigation.links.map((item)=>(
            <li
              key={item.label}
              className='cursor-pointer hover:underline bor'
            >
              <a href={item.href} className='flex gap-3'>
                <img
                  src={profile}
                  className={`${item.addIcon?"block":"hidden"}`}
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='block sm:hidden flexmid relative bor'>
          <img
            src={`${nav?times:bars}`}
            className='h-6 w-6 bor'
            onClick={()=>(setNav(!nav))}
          />
          <ul className={`${nav?"flex":"hidden"} bg-col3 absolute flex flex-col gap-2 top-7 right-0 w-32 h-auto py-2 lato text-sm`}>
            {navigation.links.map((item)=>(
              <li
                key={item.label}
                className='cursor-pointer hover:underline bor'
              >
                <a href={item.href} className='flexmid gap-3'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation

