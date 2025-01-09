import { useState } from "react";

import Banner from '../components/Banner';
import EditFormModal from "../components/EditFormModal";
import Categories from "../components/Categories";
import VideoCard from "../components/VideoCard";

import videoCardImage from '/videocard-image.jpeg';

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


function HomePage() {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
    const toggleEditModal = () => {
      setIsEditModalOpen((prevState) => !prevState);
    };

  return (
    <>
      <Banner playerImages={playerImages} />
      {
        isEditModalOpen && <EditFormModal toggleEditModal={toggleEditModal} />
      }
      
      {categoriesSection.map((category) => {
        return (
          <Categories key={category.title} category={category}>
            <VideoCard 
              videoCardImage={videoCardImage} 
              bgTitle={category.bgTitle} 
              toggleEditModal={toggleEditModal}
            />
            
          </Categories>
        );
      })}
    </>
  )
}

export default HomePage