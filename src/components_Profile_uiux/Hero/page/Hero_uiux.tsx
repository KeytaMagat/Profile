import React from 'react';
import Hero_left from '../common/Hero_left';
import Hero_middle from '../common/Hero_middle';
import Hero_right from '../common/Hero_right';
import Beams from '@/blocks/Backgrounds/Beams/Beams';

const Hero_uiux = () => {

    return (
        <div className="relative flex h-screen w-full">
            <Beams
                beamWidth={2}
                beamHeight={20}
                beamNumber={15 }
                lightColor="#EC4C2C"
                speed={5}
                noiseIntensity={3}
                scale={0.20}
                rotation={-20}
            />
            <div className="absolute flex flex-row gap-x-2 w-full h-full p-2">
                <Hero_left />
                <Hero_middle />
                <Hero_right />
            </div>
        </div>
    );
}  

export default Hero_uiux;