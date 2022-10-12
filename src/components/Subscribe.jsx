import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1>Join Our <span className='text-green-500'>Peaceful Land</span> Community</h1>
        <div className='py-4'>
            <input className='p-3 rounded-3xl mr-4 outline-none text-black border-4 hover:border-green-500' type="email" placeholder='Enter your email' />
            <button className='ml-6 bg-gradient-to-r from-green-300 to-green-600 px-2 py-4 rounded-2xl font-bold'>Sign Up</button>
        </div>
        <div className='flex items-center justify-center py-2 accent-green-500  '>
            <input className='mr-2 ' type="checkbox"/>
            <p>Yes, I agree to receive email communications from Peaceful Land.</p>
        </div>
    </div>
  )
}

export default Subscribe