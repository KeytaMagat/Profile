import React from 'react';
import bg_image from '@/assets/bggdt.jpg';
import fg_image from '@/assets/bggdt.png';
import Name from '../common/Name';
import Social_Links from '../common/Social_Links';
import Title from '../common/Title';

const Hero_main = () => {

  return (
    <div className="relative flex w-full h-screen overflow-hidden bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${bg_image})` }} 
    >
      <Name />
      <Title />
      <Social_Links />
    </div>
  );
};

export default Hero_main;