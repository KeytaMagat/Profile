import React from 'react';
import Hero_uiux from '@/components_Profile_uiux/Hero/page/Hero_uiux';
import Header_uiux from '@/components_Profile_uiux/Header/page/Header_uiux';
import Bottom_Navbar from '@/components_Profile_uiux/parts/Bottom_Navbar';
import Hero_main from '@/components_Profile_uiux/Hero_main/page/Hero_main';
import bg_image from '@/assets/bggdt.jpg';

function Profile_uiux() {
  return (
      <div className="w-full h-screen flex flex-col items-center bg-[#040404] font-sans       
        overflow-y-scroll scroll-smooth snap-y snap-mandatory"
      >
        <div className="w-full snap-start snap-always "><Hero_main /></div>
        <div className="w-full snap-start snap-always"><Hero_uiux /></div>
        <Bottom_Navbar />
      </div>
  );
} 

export default Profile_uiux;



  {/* Your content here */}