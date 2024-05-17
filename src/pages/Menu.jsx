import React from 'react'
import { Footer, MenuList, Navigation, OtherLanding, Testimonials } from '../sections'

const Menu = () => {
  return (
    <main className='flex flex-col'>
      <section className='flex h-[60px] z-50'>
        <Navigation/>
      </section>
      <section className=''>        
        <OtherLanding title="Menu"/>
      </section>
      {/* <section className='h-[1000px]'></section> */}
      <section>
        <MenuList/>
      </section>
      <section>
        <Testimonials/>
      </section>
      {/* <section className='h-[1000px]'></section> */}
      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default Menu