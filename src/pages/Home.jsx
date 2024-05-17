import React from 'react'
import { Foods, Footer, Landing, MiniGallery, Navigation, TimeLocation } from '../sections'

const Home = () => {
  return (
    <main className='flex flex-col '>
      <section className='flex h-[60px] z-50'>
        <Navigation/>
      </section>
      <section>
        <Landing/>
      </section>
      <section>
        <Foods/>
      </section>
      <section>
        <TimeLocation/>
      </section>
      <section>
        <MiniGallery/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default Home