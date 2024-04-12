import React from 'react';
import { University, School, UserCog, GraduationCap, LogOut } from 'lucide-react';

function BtSidebar(props) {
  function renderIcon(name) {
    switch (name) {
      case 'Institución':
        return <University size={32} strokeWidth={1.25} />;
      case 'Facultad':
        return <School size={32} strokeWidth={1.25} />;
      case 'Especialidad':
        return <GraduationCap size={32} strokeWidth={1.25} />;
      case 'Usuarios y Roles':
        return <UserCog size={32} strokeWidth={1.25} />;
      default:
        return <LogOut size={32} strokeWidth={1.25} />;
    }
  }

  return (
    <div className='hover:bg-[#2E3A66] transition-colors flex flex-row mx-10 text-white p-4 items-center rounded'>
      {renderIcon(props.name)}
      <p className='mx-4 text-xl'>{props.name}</p>
    </div>
  );
}

export default BtSidebar;