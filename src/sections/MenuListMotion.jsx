import React from 'react'
import { menu } from '../constant'

const Menu = ({menu}) => {
  const { imgURL, label, price } = menu;
  return (
    <div className='flex flex-col gap-1 lg:w-1/4 lg:px-6 lg:mb-14 bor'>
      <div className='bor'>
        <img
          src={imgURL}
          className='w-full bor'
        />
      </div>
      <h2 className='text-2xl playfair text-center font-medium bor'>
        {label}
      </h2>
      <p className='text-base lota text-center text-gray-600 bor'>
        NRS {price}
      </p>
    </div>
  )
}
const MenuList = () => {
  return (
    <section className='flex flex-wrap flex-col sm:flex-row sm:px-12 px-12 lg:px-32 py-16 sm:py-20 lg:py-28 borx'>
      {menu.map((menu) => (
        <Menu key={menu.label} menu={menu}/>
      ))}
    </section>
  )
}

export default MenuList