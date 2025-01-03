import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';

import playerJPG from '/player.jpg';
import playerAVIF from '/player.avif';

const playerImages = {
  jpg: playerJPG,
  avif: playerAVIF,
};

const categoriesSection = [
  { title: 'front end', bgTitle: '#6BD1FF' },
  { title: 'back end', bgTitle: '#00C86F' },
  { title: 'innovación y gestión', bgTitle: '#FFBA05' },
];

function App() {
  return (
    <>
      <Header>
        <Banner playerImages={playerImages} />
      </Header>
      {
        categoriesSection.map((category) => {
          return <Categories key={category.title} category={category} />
        })
      }
    </>
  );
}

export default App;
