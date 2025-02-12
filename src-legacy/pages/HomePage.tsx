
import { useVideoContext } from '../context/videoContext';

import Banner from '../components/Banner';
import EditFormModal from '../components/EditFormModal';
import Category from '../components/Category';

import { categories } from '../constants/categories';

import playerJPG from '/player.jpg';
import playerAVIF from '/player.avif';

const playerImages = {
  jpg: playerJPG,
  avif: playerAVIF,
};



function HomePage() {

  const { videos, isEditModalOpen, toggleEditModal } = useVideoContext();
  
  return (
    <>
      <Banner playerImages={playerImages} />
      
      {
        isEditModalOpen && <EditFormModal toggleEditModal={toggleEditModal} />
      }

      {
        categories.map((category) => 
          <Category 
            key={category.title} 
            category={category} 
            videos={videos.filter((video)=> video.categoryValue === category.title)} 
          />)  
      }
    </>
  );
}

export default HomePage;
