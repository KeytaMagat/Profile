import React from 'react';
import Hero_left from '../common/Hero_left';
import Hero_middle from '../common/Hero_middle';
import Hero_right from '../common/Hero_right';

const Hero_uiux = () => {

    return (
        <div className="flex flex-row h-screen w-full p-2 gap-x-2 ">
            <Hero_left />
            <Hero_middle />
            <Hero_right />
        </div>
    );
}  

export default Hero_uiux;