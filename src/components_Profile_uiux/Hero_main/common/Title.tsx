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
    <section id="hero" className="">
        <div className="text-center">
          
          <p className="text-2xl text-white mb-8">
            {profileData.title}
          </p>
          
          <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
            {profileData.bio}
          </p>
        </div>
    </section>
  );
};

export default Title;