import React from 'react'
import { aboutInfo } from '../constant'

const ImageText = ({data,index}) => {
  const { title, paragraph, imgURL, button, link } = data;
  return (
    <div className={`${index%2==0?"flex-row":"flex-row-reverse"} flex `}>
      <div className='flex justify-center w-1/2 h-[400px] overflow-hidden'>
        <img 
          src={imgURL}
          className='object-cover w-full '
        />
      </div>
      <div className='w-1/2 bor'>
        text
      </div>
    </div>
  )
}

export default ImageText;