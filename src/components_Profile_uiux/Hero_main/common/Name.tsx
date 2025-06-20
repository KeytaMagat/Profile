import React from 'react';
import { profileData } from '@/data/profileData';

const Name = () => {

  return (
    <div className='w-full h-dull top-50 right-50 flex justify-center z-0'>
      {/* <span className=" text-[200px] font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent h-80 flex flex-col justify-start border">
        <p>{profileData.name1}</p>
        <p>{profileData.name2}</p>
        <p>{profileData.name3}</p>
      </span> */}
      <span className="absolute font-sans  text-[900px] bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent w-fit h-fit -top-90 font-sans">
        GDT
      </span>
    </div>
  );
};

export default Name;