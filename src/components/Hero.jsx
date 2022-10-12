import React from 'react';
import Typed from 'react-typed';

import heroVid from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1>Decentralized</h1>
        <h1 className='py-2'>
          <span className='text-green-500'>Trading</span> Protocol
        </h1>
        <p className='text-xl py-4'>
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className='bg-gradient-to-r from-green-300 to-green-600 px-2 py-4 rounded-2xl font-bold m-2'>Use Defi</button>
          <button className='m-2 px-6 border-2 border-green-500 rounded-2xl font-bold py-4 hover:border-white hover:text-green-500 ' href='#'>FAQ</button>

        </div>
      </div>
      <div>

     
        <p className='text-center text-white text-2xl font-bold'>Total Volume Secured : $   
        <Typed
      className=' font-bold'
      strings={[ '42,104,783,662.47','52,200,783,662.47', '60,904,783,662.47', '31,104,463,662.47', '46,709,433,962.00' ]}
      typeSpeed={120}
      backSpeed={140}
      loop
      />
      </p>
      </div>
    </div>
  );
};

export default Hero;