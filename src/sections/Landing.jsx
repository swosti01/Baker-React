import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { ParallaxProvider, useParallax, useParallaxController } from 'react-scroll-parallax';
import { landing } from '../constant'
import { Button } from '../components'

function useUpdateControllerOnRouteChange() {
  const location = useLocation();
  const parallaxController = useParallaxController();

  useEffect(() => {
    parallaxController.update();
  }, [location.pathname]);
}

const ParallaxRouteUpdate = () => {
  useUpdateControllerOnRouteChange();
  return null;
};


const Component = () => {
  const { ref } = useParallax({ speed: -40 });
  const parallaxController = useParallaxController();
  return (
    <div ref={ref} className='absolute h-full w-full top-[-160px] sm:top-[-360px] lg:top-0 left-0 bg-col1 z-[-10]'>
      <img 
        src={landing.phBg.img3} 
        className="block sm:hidden" 
        onLoad={() => parallaxController.update()}
      />
      <img 
        src={landing.bg.img3} 
        className="hidden sm:block h-full w-full" 
        onLoad={() => parallaxController.update()}
      />
    </div>
  );
};

const Landing = () => {
  return ( 
    <div className='flex flex-col gap-6 p-6 pt-32 py-28 lg:gap-12 relative lg:h-screen overflow-hidden'>
      <ParallaxProvider>
        <Component />
      </ParallaxProvider>
      <p className='lato text-left sm:text-center text-lg'>
        {landing.main.subHeading}
      </p>
      <h1 className='playfair text-left sm:text-center text-6xl mt-[-10px]'>
        {landing.main.heading1}&nbsp;<br className="hidden sm:block"/>
        {landing.main.heading2}
      </h1>
      <div className='flex flex-row sm:justify-center gap-5 sm:pt-6'>
        <Button name={landing.main.button1}/>
        <Button name={landing.main.button2}/>
      </div>
    </div>
  )
}

export default Landing



/*


import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  render() {
    return (
      <ParallaxProvider>
        <AppRoutes />
      </ParallaxProvider>
    );
  }
}


import { useParallax } from 'react-scroll-parallax';

const Component = () => {
  const { ref } = useParallax({ speed: 10 });
  return <div ref={ref} className="my-thing" />;
};


import { useEffect } from 'react';
import { useLocation } from '@reach/router';
import { useParallaxController } from 'react-scroll-parallax';

function useUpdateControllerOnRouteChange() {
  const location = useLocation();
  const parallaxController = useParallaxController();

  useEffect(() => {
    parallaxController.update();
  }, [location.pathname]);
}

const ParallaxRouteUpdate = () => {
  useUpdateControllerOnRouteChange();
  return null;
};


const Image = () => {
  const parallaxController = useParallaxController();
  return <img src="image.jpg" onLoad={() => parallaxController.update()} />;
};

*/