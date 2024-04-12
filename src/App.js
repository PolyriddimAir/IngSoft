import React from 'react';
import MenuAdmin from './components/menu/administrador/MenuAdmin';

function App() {
  return (
    <div className='w-screen h-screen flex flex-row bg-[#39487F] ltr'>
      <div className='h-screen w-1/5'>
        <MenuAdmin />
      </div>
      <div className='w-4/5 h-screen bg-white rounded-l-[40px]'>
      </div>
    </div>
  );
}

export default App;
