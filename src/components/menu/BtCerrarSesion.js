import React from 'react';
import { LogOut } from 'lucide-react';

function BtCerrarSesion() {
    return (
        <div className='hover:bg-[#2E3A66] transition-colors flex flex-row mx-10 text-white p-4 items-center rounded'>
            <LogOut size={32} strokeWidth={1.25} />
            
            <p className='mx-4 text-xl'>Cerrar Sesión</p>
        </div>
      );
}

export default BtCerrarSesion;