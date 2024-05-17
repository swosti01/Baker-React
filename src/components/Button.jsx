import React from 'react'

const Button = ({name}) => {
  return (
    <div
      // className='flexmid borx text-sm w-[100px] h-[34px] sm:w-[120px] sm:h-[40px] md:w-[160px] md:h-[50px]  hover:bg000-05'
      className='flexmid borx text-sm lg:text-base w-36 lg:w-40 h-10 lg:h-12
        cursor-pointer hover:bg000-05
    '>
      {name}
    </div>
  )
}

export default Button