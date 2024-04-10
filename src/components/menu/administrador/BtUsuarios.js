import React from 'react';
import { UserCog } from 'lucide-react';

function BtUsuarios() {
    return (
        <div className='hover:bg-[#2E3A66] transition-colors flex flex-row mx-10 text-white p-4 items-center rounded'>
            <UserCog size={32} strokeWidth={1.25} />
            
            <p className='mx-4 text-xl'>Usuarios y Roles</p>
        </div>
      );
}

export default BtUsuarios;