import React, { useState } from 'react';
import BtSidebar from '../BtSidebar';
import User from '../User/User';

function MenuAdmin() {
  const [activeDiv, setActiveDiv] = useState(null);
  const button = ['Datos Institución', 'Facultades y Programas', 'Gestión Coordinadores', 'Gestión Alumnos'];

  return (
    <div className='bg-[#39487F] h-screen w-[20%] fixed flex flex-col justify-between'>
      <div>
        <User />
        {button.map((div, index) => (
          <BtSidebar
            key={index}
            isActive={activeDiv === index}
            onClick={() => setActiveDiv(index)} // Corrección aquí
            name={div}
          />
        ))}
      </div>     
      <div className='text-center mb-8'>
        <BtSidebar name='Cerrar Sesión' />
      </div>
    </div>
  );
}

export default MenuAdmin;
