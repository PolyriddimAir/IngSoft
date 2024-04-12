import React, { useState } from 'react';
import { Building2, Library, UserRoundCog, LogOut } from 'lucide-react';

function BtSidebar({ isActive, onClick, name }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  function renderIcon(name) {
    switch (name) {
      case 'Datos Institución':
        return <Building2 size={32} strokeWidth={1.25} />;
      case 'Facultades y Programas':
        return <Library size={32} strokeWidth={1.25} />;
      case 'Gestión Coordinadores':
        return <UserRoundCog size={32} strokeWidth={1.25} />;
      case 'Gestión Alumnos':
        return <UserRoundCog size={32} strokeWidth={1.25} />;
      default:
        return <LogOut size={32} strokeWidth={1.25} />;
    }
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={
        `clickableDiv ${isActive ? 'active' : ''} flex flex-row items-center p-4 transition
        ${isActive ? 'text-[#00C1BC]' : isHovering ? 'bg-[#2E3A66] text-white' : 'text-white'}
        ${isActive ? 'border-l-2 border-[#00C1BC]' : 'border-l-2 border-transparent cursor-pointer'}`
      }
    >
      {renderIcon(name)}
      <p className='mx-4 text-[18px] font-[poppins]'>{name}</p>
    </div>
  );
}

export default BtSidebar;