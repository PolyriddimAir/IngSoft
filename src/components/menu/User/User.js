import React from 'react';
import LucyImage from './Lucifer1.jpg';

function User() {
    return (
        <div className='w-[100%] h-[20%] flex items-center'>
            <div className='flex self-center self-center w-[100%] h-[80%] items-center cursor-pointer'>
                <img src={LucyImage} alt="Descripción de la imagen" className="ml-6 sm:ml-12 h-[60%] sm:h-[80%] rounded-full" />
                <p className='ml-2 sm:ml-6 text-xl text-white'>Mami Lucy</p>
            </div>
        </div>
    );
}

export default User