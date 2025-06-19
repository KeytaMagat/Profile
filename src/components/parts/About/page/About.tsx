import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { profileData } from '@/data/profileData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, skills, and experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {profileData.about.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {Object.entries(profileData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-lg font-medium text-gray-800 mb-3 capitalize">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Experience & Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Experience
                </h4>
                <div className="space-y-4">
                  {profileData.experience.map((exp, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-gray-800">{exp.title}</h5>
                      <p className="text-blue-600 text-sm">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                      <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Education
                </h4>
                <div className="space-y-4">
                  {profileData.education.map((edu, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-gray-800">{edu.degree}</h5>
                      <p className="text-blue-600 text-sm">{edu.school}</p>
                      <p className="text-gray-500 text-sm">{edu.year}</p>
                      <p className="text-gray-600 text-sm mt-1">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;