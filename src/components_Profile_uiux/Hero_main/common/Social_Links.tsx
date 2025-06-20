import React from "react";
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { profileData } from "@/data/profileData";
import GlassIcons from "@/blocks/Components/GlassIcons/GlassIcons";

const Social_Links = () => {

        // update with your own icons and colors
        const items = [
        { icon: <Github />, color: 'red', label: 'Github' },
        { icon: <Linkedin />, color: 'red', label: 'Linkedin' },
        { icon: <Mail />, color: 'red', label: 'GMail' },
        // { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
        // { icon: <FiEdit />, color: 'orange', label: 'Notes' },
        // { icon: <FiBarChart2 />, color: 'green', label: 'Stats' },
        ];
    return (
        <div className="w-full h-fit flex bottom-30 right-50 justify-between">
            {/* <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a> */}
            
            <GlassIcons items={items} className="custom-class"/>
            
        </div>
    );
};

export default Social_Links;