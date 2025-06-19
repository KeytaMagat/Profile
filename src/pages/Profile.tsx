import React from 'react';
import About from '@/components/parts/About/page/About';
import Contact from '@/components/parts/Contact/page/Contact';
import Footer from '@/components/parts/Footer/page/Footer';
import Header from '@/components/parts/Header/page/Header';
import Hero from '@/components/parts/Hero/page/Hero';
import Projects from '@/components/parts/Projects/page/Projects';

function Profile() {
  return (
    <div className="min-h-screen bg-red-500">
        <Header />
        <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </div>
  );
} 

export default Profile;