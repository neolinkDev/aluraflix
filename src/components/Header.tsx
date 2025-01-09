
// import Banner from './Banner';
import { Link } from 'react-router-dom';
import Button from './Button';

// type HeaderProps = {
//   children?: React.ReactNode;
// };

function Header() {
  return (
    // <header className="w-[90%] py-6 flex flex-col gap-6 items-center justify-center max-w-screen-xl md:flex-row md:justify-between mx-auto">
    <header className="">

      <nav className="grid py-6 justify-items-center items-center gap-6 w-[90%] max-w-screen-xl mx-auto overflow-hidden sm:grid-flow-col sm:justify-between">

        <div className="">
          <img
            // className="block h-auto max-w-full"
            className=""
            src="/LogoMain.png"
            alt="Logo Aluraflix"
          />
        </div>

        <div className='space-x-4'>
          <Link to="/">
            <Button
              label="HOME"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            />
          </Link>
          <Link to="/nuevo-video">
            <Button
              label="NUEVO VIDEO"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
