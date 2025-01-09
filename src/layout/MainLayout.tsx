import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
// import Banner from '../components/Banner';

// import playerJPG from '/player.jpg';
// import playerAVIF from '/player.avif';

// const playerImages = {
//   jpg: playerJPG,
//   avif: playerAVIF,
// };

// type MainLayoutProps = {
//   children: React.ReactNode
// }

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
