import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import VideoCard from './components/VideoCard';

import playerJPG from '/player.jpg';
import playerAVIF from '/player.avif';
import videoCardImage from '/videocard-image.jpeg';

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
      {categoriesSection.map((category) => {
        return (
          <Categories key={category.title} category={category}>
            <VideoCard videoCardImage={videoCardImage} bgTitle={category.bgTitle} />
            <VideoCard videoCardImage={videoCardImage} bgTitle={category.bgTitle} />
            <VideoCard videoCardImage={videoCardImage} bgTitle={category.bgTitle} />
          </Categories>
        );
      })}
    </>
  );
}

export default App;
