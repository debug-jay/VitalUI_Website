import React, { useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useScrollPosition } from '../scripts/nav_script';

const NAVBAR = () =>
{
    const [show, setShow] = React.useState(true);
    const [showLogin, setShowLogin] = useState(false);

    function changeStuff(){
        setShow(!show);
        setShowLogin(!showLogin);
    }

    const scrollPosition = useScrollPosition();

    console.log(scrollPosition);


  return(
    <div className='fixed w-full z-10'>
    <nav className="flex items-center justify-between flex-wrap bg-gray-600 bg-opacity-30 backdrop-blur-sm p-6" id="navbar">
  <div className="flex items-center flex-shrink-0 text-white mr-0 justify-center md:ml-24">
    <span className="font-semibold text-2xl tracking-wider"><Link to="/">VitalUI</Link></span>
  </div>

  <div className='flex lg:hidden w-2/3 justify-end items-center'>
    <div className='lg:mr-5 hidden sm:block '>
      <Link to="/login" className=" flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-0 mobile:ml-5 border border-purple-500 rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 md:mt-0">Sign Up</Link>
    </div>
    <div className='lg:mr-5 hidden sm:block'>
        <Link to="/login" className=" flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-4 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white md:mt-0">Login</Link>
    </div>
    <div className="block lg:hidden">
    <button onClick={() => changeStuff()} className="flex items-center px-3 py-2 border rounded text-blue-200 border-white hover:text-white hover:border-white">
      <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
    </div>

  {show?
    <div className=" bg-transparent w-full block flex-grow lg:flex lg:items-center lg:w-auto  lg:backdrop-blur-none lg:border-none" id='nav-handler'>
    <div className="text-md lg:flex-grow lg:flex justify-center items-center">
      <a href="#components" className="flex justify-center mt-5 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14">
        Components
      </a>
      <a href="#applicationui" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14">
        Application UI
      </a>
      <a href="#templates" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
        Templates
      </a>
    </div>
    <div className='lg:mr-5 sm:hidden'>
      <Link to="/login" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-purple-500 rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 mt-4 lg:mt-0">Sign Up</Link>
    </div>
    <div className='lg:mr-5 sm:hidden'>
        <Link to="/login" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
    </div>

    <br/>
  </div>:null}
  <div className=' hidden lg:inline-flex'>
    <div className='lg:mr-5'>
      <Link to="/login" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-purple-500 rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 mt-4 lg:mt-0">Sign Up</Link>
    </div>
    <div className='lg:mr-5'>
        <Link to="/login" className="mb-5 lg:mb-0 flex justify-end items-end text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-0 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
    </div>
    </div>
</nav>
<Outlet/>
</div>);
    
}

function Navigation()
{
    return(
        <NAVBAR />
    );
}

export default Navigation;