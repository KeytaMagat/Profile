import React from 'react';
import MySelf from '../common/myself/page/MySelf';
import Skills from '../common/skills/page/Skills';
import Education from '../common/education/page/Education';
import Experience from '../common/experience/page/Experience';

const About = () => {

return (
        <div className="flex flex-wrap gap-2 w-full h-screen p-2">
            <MySelf />
            <Skills />
            <Education />
            <Experience />
        </div>
    );
}  

export default About;