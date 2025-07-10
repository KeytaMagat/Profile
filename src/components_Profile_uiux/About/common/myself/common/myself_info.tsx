import React from 'react'
import { aboutData } from '../../aboutData';

const MySelf_Info = () => {
    return ( 
        <div>
            {aboutData.about.story.map((paragraph, index) => (
                <p className='text-white' key={index}>{paragraph}</p>
            ))}
        </div>
    );
}
 
export default MySelf_Info;