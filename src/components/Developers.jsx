import React from 'react';
import Theme from '../assets/Wallpaper.jpg'

const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>Superpowers for developers.</h1>
          <p className='font-bold'>
            Checkout the <span className="text-green-500">documentation</span>, the <span className="text-green-500">quick start</span>  or a guide below to integrate your project with thousands of tokens and billions of liquidity.
          </p>
        </div>
      </div>
      <div className='flex justify-center w-full py-16'>
            <img className='max-w-[480px] shadow-lg shadow-green-500/50' src={Theme} alt="/" />
        </div>
    </div>
    
  );
};

export default Developers;