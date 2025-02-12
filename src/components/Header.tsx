import { Link } from 'react-router-dom';
import NavButton from './NavButton';
import { AddCircle } from './Icons';

export default function Header() {
  return (
    <header className="border-b-4 border-[#2271D1]">
      <nav className="grid py-6 justify-items-center items-center gap-6 w-[90%] max-w-screen-xl mx-auto overflow-hidden sm:grid-flow-col sm:justify-between">
        <div className="hidden sm:block">
          <img className="" src="/LogoMain.png" alt="Logo Aluraflix" />
        </div>

        <div className="flex items-center justify-center space-x-4">
          <Link to="/">
            <NavButton
              label="HOME"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            />
          </Link>
          <Link to="/nuevo-video" className="flex">
            <NavButton
              label="NUEVO VIDEO"
              hasIcon={true}
              icon={<AddCircle />}
              className="sm:py-2.5 sm:px-5 sm:text-sm sm:font-medium sm:focus:outline-none sm:rounded-lg sm:border sm:focus:z-10 sm:focus:ring-4 sm:focus:ring-gray-700 sm:bg-gray-800 sm:text-gray-400 sm:border-gray-600 sm:hover:text-white sm:hover:bg-gray-700 sm:mr-1"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
