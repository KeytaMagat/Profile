import React from 'react';
import Hero_uiux from '@/components_Profile_uiux/Hero/page/Hero';
import Header_uiux from '@/components_Profile_uiux/Header/page/Header_uiux';
import Footer from '@/components/parts/Footer/page/Footer';

function Profile_uiux() {
  return (
    <div className="min-h-screen bg-red-500">
        <Header_uiux />
        <main>
            <Hero_uiux />
        </main>
        <Footer />
    </div>
  );
} 

export default Profile_uiux;