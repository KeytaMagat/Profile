import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { profileData } from '@/data/profileData';

const Title = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="absolute bottom-15 left-50 z-1 ">
        {/* <div className="text-start p-2 pl-4 flex flex-col gap-y-2 w-fit 
        rounded-[1em] bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[.35em]"> */}
        <div className='w-100 space-y-2'>
          <p className="text-sm font-bold text-white ">
            {profileData.title}
          </p>
          
          <p className="text-[12px] text-white">
            {profileData.bio}
          </p>
        </div>
    </section>
  );
};

export default Title;