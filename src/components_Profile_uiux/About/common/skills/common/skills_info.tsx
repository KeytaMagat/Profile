import React from 'react'
import { Badge } from '@/components/ui/badge';
import { aboutData } from '../../aboutData';

const Skills_Info = () => {
    return (  
        <div className="space-y-6">
            {Object.entries(aboutData.skills).map(([category, skills]) => (
            <div key={category}>
                <h4 className="text-lg font-medium text-white/80 mb-3 capitalize">
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
    );
}
 
export default Skills_Info;