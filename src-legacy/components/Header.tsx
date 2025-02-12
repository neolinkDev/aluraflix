

import { Link } from 'react-router-dom';
import NavButton from './NavButton';
import { AddCircle } from './Icons';


export default function Header() {
  return (
   
    <header className="border-b-4 border-[#2271D1]">

      <nav className="grid py-6 justify-items-center items-center gap-6 w-[90%] max-w-screen-xl mx-auto overflow-hidden sm:grid-flow-col sm:justify-between">

        <div className="hidden sm:block">
          <img
            className=""
            src="/LogoMain.png"
            alt="Logo Aluraflix"
          />
        </div>

        <div className='flex items-center justify-center space-x-4'>
          <Link to="/">
            <NavButton label='HOME' className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900' />
          </Link>
          <Link to="/nuevo-video" className='flex'>
            <NavButton 
              label='NUEVO VIDEO' 
              hasIcon={true} 
              icon={<AddCircle />} 
              className='sm:py-2.5 sm:px-5 sm:text-sm sm:font-medium sm:text-gray-900 sm:focus:outline-none sm:bg-white sm:rounded-lg sm:border sm:border-gray-200 sm:hover:bg-gray-100 sm:hover:text-blue-700 sm:focus:z-10 sm:focus:ring-4 sm:focus:ring-gray-100 sm:dark:focus:ring-gray-700 sm:dark:bg-gray-800 sm:dark:text-gray-400 sm:dark:border-gray-600 sm:dark:hover:text-white sm:dark:hover:bg-gray-700 sm:mr-1' />
          </Link>
        </div>
      </nav>
    </header>
  );
}
