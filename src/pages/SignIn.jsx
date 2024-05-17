import React from 'react'
import {  Footer, Navigation } from '../sections'
const SignIn = () => {
  return (
    <main className='flex flex-col'>
      <section className='flex h-[60px] z-50'>
        <Navigation/>
      </section>
      <section className='h-[100px]'></section>
      <section className='borx'>
        SignInUpForm
      </section>
      <section className='h-[1000px]'></section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}

export default SignIn