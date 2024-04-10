import React from 'react';
import LucyImage from './Lucifer1.jpg';
import { ChevronDown } from 'lucide-react';

function Usuario() {
  return (
    <div className='w-full h-[10%] flex items-center justify-center border-b-2 border-gray-300'>
      <div className='flex ml-auto mr-2 self-center self-center w-full sm:w-1/3 md:w-1/4 h-[80%] border-l-2 border-gray-300 items-center group hover:bg-gray-200 transition rounded'>
        <img src={LucyImage} alt="Descripción de la imagen" className="ml-6 sm:ml-12 h-[60%] sm:h-[80%] rounded-full group-hover:opacity-50 transition" />
        <p className='ml-2 sm:ml-6 text-xl group-hover:opacity-50 transition'>Mami Lucy</p>
        <ChevronDown size={24} strokeWidth={1.25} className='ml-auto mr-2 sm:mr-12 text-gray-500 group-hover:opacity-50 transition' />
      </div>
    </div>
  );
}

export default Usuario;