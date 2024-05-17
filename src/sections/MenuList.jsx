import React, { useState } from 'react'
import { menu } from '../constant'
import { motion } from 'framer-motion';
import { cartBig, heartFillBig, heartLightBig, starFillBrown } from '../assets/icons';

const ItemIcon = ({iconURL,heart,setHeart}) => {
  return (
    <div 
      className='bg-gray-700 w-[50px] p-[5px] rounded-full cursor-pointer'
      onClick={()=>(setHeart(!heart))}
    >
      <img src={iconURL}/>
    </div>
  )
}
const Menu = ({menu}) => {
  const { imgURL, label, rating, text, price } = menu;
  const [itemHover, setItemHover] = useState(false);
  const [heart, setHeart] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const imageVariants = {
    normal: {scale:1},
    hover: {scale:1.1, transition: { duration: 0.5 }},
  }
  return (
    <div className='flex sm:w-1/3 lg:w-1/4 px-3 lg:px-4 lg:mb-12 bor'>
      <motion.div 
        className='flex flex-col gap-1 px-2 pb-3 relative bor'
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onMouseEnter={() => setItemHover(true)}
        onMouseLeave={() => setItemHover(false)}
      >
        <div className='flex flex-col gap-2 w-full bor'>
          <motion.div 
            initial="normal"
            animate={itemHover ? "hover" : "normal"}
            variants={imageVariants}
            className=''
          >
            <img
              src={imgURL}
              className='w-full'
            />
          </motion.div>
          <h2 className='text-2xl playfair text-center font-medium  text-gray-900'>
            {label}
          </h2>
          <p className='text-base playfair text-center text-gray-500 hidden'>
            {text}
          </p>
          <div className='flex justify-center items-center gap-2 text-base lota text-center text-gray-600'>
            <img src={starFillBrown} className='w-5'/>
            <span>{rating}</span>
          </div>
          <p className='text-base lota text-center text-gray-900'>
            NRS. {price}
          </p>
        </div>
        <motion.div 
          className='flex justify-center gap-4 top-[40px] absolute w-full'
          initial="hidden"
          animate={itemHover ? "visible" : "hidden"}
          variants={variants}
        >
          <ItemIcon key={heartFillBig} iconURL={heart?heartFillBig:heartLightBig} heart={heart} setHeart={setHeart}/>
          <ItemIcon key={cartBig} iconURL={cartBig}/>
        </motion.div>
      </motion.div>
    </div>
  )
}
const MenuList = () => {
  return (
    <section className='flex flex-wrap flex-col sm:flex-row sm:px-12 px-12 lg:px-32 py-16 bor'>
      {menu.map((menu,index) => (
        <Menu key={menu.label+index} menu={menu}/>
      ))}
    </section>
  )
}

export default MenuList