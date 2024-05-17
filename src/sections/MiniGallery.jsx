import React from 'react'
import { miniGallery } from '../constant'

const MiniGallery = () => {
  return (
    <div className='flex flex-wrap bor'>
    {miniGallery.map((item,index)=>(
        <div 
          key={index}
          className='w-1/2 sm:w-1/3 lg:w-1/6 h-[250px] sm:h-[340px] lg:h-[290px] overflow-hidden'
        >
          <img
            src={item.imgURL}
          />  
        </div>
      ))}
    </div>
  )
}

export default MiniGallery