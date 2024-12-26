// import { HeaderWrapper, MainHeader } from '../styles/Header';
// import SwipeableTemporaryDrawer from './HamburgerMenu';

import Button from "./Button";

// type HeaderProps = {
//   children?: React.ReactNode;
// };

function Header() {
  return (
    <header className="w-[90%] py-6 flex flex-col gap-6 items-center justify-center max-w-screen-xl md:flex-row md:justify-between mx-auto">

      {/* <div className="flex flex-col items-center justify-between w-[90vw]"> */}
      <div className="">
        {/* <img className="block h-auto max-w-full" src="/LogoMain.png" alt="Logo Aluraflix" /> */}
        <img className="block h-auto max-w-full" src="/LogoMain.png" alt="Logo Aluraflix" />
      </div>

      {/* <nav className="flex items-center justify-center"> */}
      <nav className="space-x-4">
        <Button label="HOME" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" />
        <Button label="NUEVO VIDEO" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" />
      </nav>

    </header>
  );
}

export default Header;
