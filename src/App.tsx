import Header from './components/Header';
import Banner from './components/Banner';

import playerJPG from '/player.jpg';
import playerAVIF from '/player.avif';

const playerImages = {
  jpg: playerJPG,
  avif: playerAVIF,
};

function App() {
  return (
    <>
      <Header>
        <Banner playerImages={playerImages} />
      </Header>
      {/* <h1 className="text-3xl">ALURAFLIX</h1> */}
      {/* <Header /> */}
    </>
  );
}

export default App;
