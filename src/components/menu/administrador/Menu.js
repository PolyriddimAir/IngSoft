import React from 'react';
import BtInstitucion from './BtInstitucion';
import BtFacultad from './BtFacultad';
import BtEspecialidad from './BtEspecialidad';
import BtCerrarSesion from '../BtCerrarSesion';
import BtUsuarios from './BtUsuarios';

function Menu() {
  return (
    <div className='bg-[#39487F] h-screen w-1/5 fixed flex flex-col justify-between'>
      <div>
        <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>
          Logo
        </h1>
        <BtInstitucion />
        
        <BtFacultad />

        <BtEspecialidad />

        <BtUsuarios />
      </div>     
      <div className='text-center mb-5'>
        <BtCerrarSesion />
      </div>
    </div>
  );
}

export default Menu;