import React from 'react';
import { School } from 'lucide-react';
 
function BtFacultad() {
  return (
    <div className='hover:bg-[#2E3A66] transition-colors flex flex-row mx-10 text-white p-4 items-center rounded'>
        <School size={32} strokeWidth={1.25} />
        
        <p className='mx-4 text-xl'>Facultad</p>
    </div>
  );
}

export default BtFacultad;