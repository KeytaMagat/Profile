import React from 'react';
import bg_image from '@/assets/bggdt.jpg';
import fg_image from '@/assets/bggdt.png';  
import Name from '../common/Name';
import Social_Links from '../common/Social_Links';
import Title from '../common/Title';

const Hero_main = () => {

  return (
      <div className="flex w-full h-screen overflow-hidden bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${bg_image})` }} 
      >
        <div className="absolute w-full h-screen bg-cover bg-top bg-no-repeat z-1"
        style={{ backgroundImage: `url(${fg_image})` }}
        />

        <div className='relative flex justify-center w-full'>
          {/* <div className='absolute left-0 flex flex-col w-1/4 border'>
            <Title />
          </div>
          <div className='absolute right-0 flex flex-col w-1/4 border'>
            <Name />
            <Social_Links />          
          </div> */}
          <Title />
          <Name />
          <Social_Links/>
        </div>
      </div>
  );
};

export default Hero_main;