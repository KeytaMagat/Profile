import React from 'react';
import About from '@/components_Profile_uiux/About/page/About';
import Bottom_Navbar from '@/components_Profile_uiux/u_parts/Bottom_Navbar';
import Hero_main from '@/components_Profile_uiux/Hero_main/page/Hero_main';
import Beams from '@/blocks/Backgrounds/Beams/Beams';
import Projects from '@/components_Profile_uiux/Projects/page/Projects';

function Profile_uiux() {
  return (
    <div className='relative flex h-screen'>
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
      <div className="absolute w-full h-screen flex flex-col items-center bg-[#04040400] font-sans       
        overflow-y-scroll scroll-smooth snap-y snap-proximity"
      >
        <div className="w-full snap-start snap-always"><Hero_main /></div>
        <div className="w-full snap-start snap-always"><About /></div>
        <div className="w-full snap-start snap-always"><Projects /></div>
        <Bottom_Navbar />
      </div>
    </div>
  );
} 

export default Profile_uiux;



  {/* Your content here */}