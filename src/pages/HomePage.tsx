// import { useState } from 'react';
import { useVideoContext } from '../context/videoContext';

import Banner from '../components/Banner';
import EditFormModal from '../components/EditFormModal';
import Category from '../components/Category';

import playerJPG from '/player.jpg';
import playerAVIF from '/player.avif';

const playerImages = {
  jpg: playerJPG,
  avif: playerAVIF,
};

const categories = [
  { title: 'frontend', bgTitle: '#6BD1FF' },
  { title: 'backend', bgTitle: '#00C86F' },
  { title: 'innovación y gestión', bgTitle: '#FFBA05' },
];

function HomePage() {

  const { videos, isEditModalOpen, toggleEditModal } = useVideoContext();
  
  return (
    <>
      <Banner playerImages={playerImages} />
      
      {isEditModalOpen && <EditFormModal toggleEditModal={toggleEditModal} />}

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
