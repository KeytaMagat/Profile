import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { profileData } from '@/data/profileData';

const Name = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full h-fu top-50 right-50 border'>
      <span className=" text-8xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent h-80 flex flex-col justify-start">
        <p>{profileData.name1}</p>
        <p>{profileData.name2}</p>
        <p>{profileData.name3}</p>
      </span>
    </div>
  );
};

export default Name;