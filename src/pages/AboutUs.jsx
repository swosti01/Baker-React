import React from 'react'
import { AboutInfo, Awards, Footer, Navigation, OtherLanding, Quality } from '../sections'
import { aboutLanding } from '../constant'

const AboutUs = () => {
  return (
    <main className='flex flex-col'>
      <section className='flex h-[60px] z-50'>
        <Navigation/>
      </section>
      <section className=''>        
        <OtherLanding title={aboutLanding.title}/>
      </section>
      <section>
        <Awards/>
      </section>
      <section>
        <AboutInfo/>
      </section>
      <section>
        <Quality/>
      </section>
      {/* <section className='h-[1000px]'></section> */}
      <section>
        <Footer/>
      </section>
      {/* <section className='h-[1000px]'></section> */}
    </main>
  )
}

export default AboutUs