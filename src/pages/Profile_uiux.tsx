import React from 'react';
import Hero_uiux from '@/components_Profile_uiux/Hero/page/Hero';
import Header_uiux from '@/components_Profile_uiux/Header/page/Header_uiux';
import Bottom_Navbar from '@/components_Profile_uiux/parts/Bottom_Navbar';

function Profile_uiux() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#040404]">
        <Hero_uiux />
        <Bottom_Navbar />
    </div>
  );
} 

export default Profile_uiux;