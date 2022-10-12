import {React , useState}  from 'react';
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {

const [nav, setNav] = useState(false)

const handleNav =() =>
{
    setNav(!nav)

}

  return (
    <div className='bg-black'>
    <div className='w-100 h-[80px] bg-black'>
    
    <div className='max-w-[1240px] mx-auto px-4px flex justify-between items-center h-full'>

   <h1 className='text-green-500 text-3xl font-extrabold'>React.</h1>
   <div className='hidden md:flex'>
    <ul className='flex text-white text-lg items-center '>
        <li className='hover:text-green-500'>Profile</li>
        <li className='hover:text-green-500'>Projects</li>
        <li className='hover:text-green-500'>Experience</li>
        <li className='hover:text-green-500'>About</li>
    <button className='ml-6 bg-gradient-to-r from-green-300 to-green-600 px-2 py-4 rounded-2xl font-bold'>Get Started</button>
    </ul>
   </div>

   {/* Hamburger menu */}

   <div onClick ={handleNav} className='block md:hidden'>
   
   {nav ? <AiOutlineClose size={30} className='text-white mr-2' /> :  <AiOutlineMenu size={30} className='text-white mr-2' />}
   
   </div>

   {/* Mobile menu */}
   <div className= {nav ? 'w-full bg-black text-green-500 absolute top-[80px] left-0 flex justify-center text-center' : 'absolute left-[-100%] md:hidden lg:hidden'}>
    <ul className='md:hidden lg:hidden'>
    <li className='text-lg font-bold'>Profile</li>
        <li className='text-lg font-bold'>Projects</li>
        <li className='text-lg font-bold'>Experience</li>
        <li className='text-lg font-bold'>About</li>
        <button className='m-8 p-2 bg-gradient-to-r from-green-300 to-green-600 px-2 py-4 rounded-2xl font-bold text-black'>Get Started</button>
    </ul>
   </div>
   
   </div>

    </div>
    </div>
  )
}

export default Navbar