import React from 'react';
import BtSidebar from '../BtSidebar';

function MenuAdmin() {
  return (
    <div className='bg-[#39487F] h-screen w-1/5 fixed flex flex-col justify-between'>
      <div>
        <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>
          Logo
        </h1>
        <BtSidebar name='Institución'/>
        <BtSidebar name='Facultad'/>
        <BtSidebar name='Especialidad'/>
        <BtSidebar name='Usuarios y Roles'/>
      </div>     
      <div className='text-center mb-5'>
        <BtSidebar name='Cerrar Sesión'/>
      </div>
    </div>
  );
}

export default MenuAdmin;