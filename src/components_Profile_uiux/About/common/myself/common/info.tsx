import React from 'react'
import { aboutData } from '../../aboutData';

const Info = () => {
    return ( 
        <div>
            {aboutData.about.story.map((paragraph, index) => (
                <p className='text-white' key={index}>{paragraph}</p>
            )
            )}
        </div>
    );
}
 
export default Info;