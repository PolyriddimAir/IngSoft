import React from 'react';
import { University } from 'lucide-react';

function BtInstitucion() {
  return (
    <div className='hover:bg-[#2E3A66] transition-colors flex flex-row mx-10 text-white p-4 items-center rounded'>
        <University size={32} strokeWidth={1.25}/>
        
        <p className='mx-4 text-xl'>Institución</p>
    </div>
  );
}

export default BtInstitucion;