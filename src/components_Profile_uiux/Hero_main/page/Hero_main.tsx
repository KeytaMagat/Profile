import React from 'react';
import bg_image from '@/assets/bggdt.jpg';
import fg_image from '@/assets/bggdt.png';  
import Name from '../common/Name';
import Social_Links from '../common/Social_Links';
import Title from '../common/Title';
import Hero_image from './Hero_images';

const Hero_main = () => {

  return (
    <div className="flex w-full h-screen overflow-hidden bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${bg_image})` }} 
    >
      <div className='flex justify-center w-full backdrop-blur-md backdrop-filter'>
        <div className='flex flex-col w-1/4 border'>
          <Title />
        </div>
        <div className='flex flex-col w-1/2 justify-center items-center border'>        
          <Hero_image />
        </div>
        <div className='flex flex-col w-1/4 border'>
          <Name />
          <Social_Links />          
        </div>
      </div>
    </div>
  );
};

export default Hero_main;