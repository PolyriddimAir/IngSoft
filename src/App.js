import React from 'react';
import Menu from './components/menu/administrador/Menu';
import Usuario from './components/usuario/Usuario';

function App() {
  return (
    <div className='w-screen h-screen flex flex-row'>
      <div className='h-screen w-1/5'>
        <Menu />
      </div>
      <div className='w-4/5 h-screen flex flex-col'>
        <Usuario />
        
      </div>
    </div>
  );
}

export default App;
