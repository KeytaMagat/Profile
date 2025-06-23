import React from 'react';
import { profileData } from '@/data/profileData';
import fg_image from '@/assets/bggdt.png';  

const Name = () => {

  return (
    <div className='w-full h-dull top-50 flex justify-center'>
      {/* <span className=" text-[200px] font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent h-80 flex flex-col justify-start border">
        <p>{profileData.name1}</p>
        <p>{profileData.name2}</p>
        <p>{profileData.name3}</p>
      </span> */}
      <img src={fg_image} alt="" className='absolute z-1 w-full'/>

      <span className="absolute font-bold text-[1050px] w-fit h-fit -top-115
        bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
      >
        {profileData.shortened}
      </span>
      <div className='absolute flex flex-row gap-x-150 justify-center w-full bottom-60 z-1     
        text-lg font-semibold
        bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent'
      >
        <p>{profileData.name1}</p>
        <p>{profileData.name2}</p>
        <p>{profileData.name3}</p>
      </div>
    </div>
  );
};

export default Name;