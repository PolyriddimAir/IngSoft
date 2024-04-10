import React from 'react';
import { GraduationCap } from 'lucide-react';

function BtEspecialidad() {
  return (
    <div className='hover:bg-[#2E3A66] transition-colors flex flex-row mx-10 text-white p-4 items-center rounded'>
        <GraduationCap size={32} strokeWidth={1.25} />
        
        <p className='mx-4 text-xl'>Especialidad</p>
    </div>
  );
}

export default BtEspecialidad;