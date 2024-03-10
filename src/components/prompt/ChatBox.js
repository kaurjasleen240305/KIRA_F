import { ThumbUpIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';


const ChatBox = ({ message,initialColor,alignment,heading }) => {

  return (
    <div
  className={`max-w-md flex flex-col my-4 p-5 border border-black rounded-lg relative overflow-hidden flex justify-${alignment}`}
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent background color
    backdropFilter: 'blur(8px)', // Apply blur effect
  }}
>
  <span className="border border-black mb-2 px-5 py-1 bg- font-bold tracking-wider rounded-full font-serif text-gray-700 ">{heading}</span>
  <p className="text-2xl font-semibold">{message}</p>
  {/* <button
    className="absolute bottom-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-lg"
  > */}
    <span className='w-8 h-8'>
        <ThumbUpIcon />
    </span>
    {/* <ThumbUpIcon/> */}
  {/* </button> */}
</div>
  );
};

export default ChatBox;
