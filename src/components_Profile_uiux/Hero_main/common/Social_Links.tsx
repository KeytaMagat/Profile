import React from "react";
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { profileData } from "@/data/profileData";

const Social_Links = () => {

    return (
        <div className="w-full flex bottom-30 right-50 justify-between">
            <a
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
            </a>
          </div>
    );
};

export default Social_Links;