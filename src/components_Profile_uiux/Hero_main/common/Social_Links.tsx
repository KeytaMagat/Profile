import React from "react";
import { Github, Linkedin, Mail } from 'lucide-react';
import GlassIcons from "@/blocks/Components/GlassIcons/GlassIcons";

const Social_Links = () => {
    // Function to handle link clicks
    const handleLinkClick = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    // Define the items with onClick handlers
    const items = [
        { 
            icon: <Github />, 
            color: 'red', 
            label: 'Github', 
            onClick: () => handleLinkClick("https://github.com/KeytaMagat") 
        },
        { 
            icon: <Linkedin />, 
            color: 'red', 
            label: 'Linkedin', 
            onClick: () => handleLinkClick("http://www.linkedin.com/in/gadieldavetagam") 
        },
        { 
            icon: <Mail />, 
            color: 'red', 
            label: 'Mail', 
            onClick: () => handleLinkClick("mailto:tagam.gadieldave@gmail.com") 
        },
    ];

    return (
        <div className="absolute w-fit h-fit flex bottom-3 right-40 justify-between z-1">
            <GlassIcons items={items} className="custom-class" />
        </div>
    );
};

export default Social_Links;
