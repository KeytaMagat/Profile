import React from 'react';
import bg_image from '@/assets/bggdt.jpg';
import Lanyard from '@/blocks/Components/Lanyard/Lanyard';

const Hero_image = () => {

    return (
        <>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </>
    );

}
export default Hero_image;