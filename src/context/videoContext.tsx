import { createContext, useContext, useEffect, useState } from 'react';
import { createVideo, deleteVideo, fetchVideos, updateVideo } from '../services/api';

export interface VideoCardData {
  id?: string;
  titleValue: string;
  categoryValue: string;
  imageValue: string;
  videoValue: string;
  descriptionValue: string;
}

interface VideoContextType {
  videos: VideoCardData[];
  registerVideoCard: (newCardVideo: VideoCardData) => void;
  editVideoCard: (id: string, updatedVideo: VideoCardData) => void;
  deleteVideoCard: (id: string) => void
  isEditModalOpen: boolean; 
  toggleEditModal: () => void;
  currentVideo: VideoCardData | null;
  setCurrentVideo: (video: VideoCardData | null) => void;
}

// context
// eslint-disable-next-line react-refresh/only-export-components
export const VideoContext = createContext<VideoContextType | undefined>(
  undefined
);

//
export const VideoProvider = ({ children }: {children: React.ReactNode}) => {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [videos, setVideos] = useState<VideoCardData[]>([]);
  const [currentVideo, setCurrentVideo] = useState<VideoCardData | null>(null);

  // obtiene los videos
  useEffect(() => {
    const getVideos = async () => {
      const videos = await fetchVideos();
      setVideos(videos);
    };
    getVideos();
  }, []);
  
  // mostrar/ocultar modal para editar video
  const toggleEditModal = () => {
    setIsEditModalOpen((prevState) => !prevState);
  };

  //
  const registerVideoCard = async (newCardVideo: VideoCardData) => {
    const createdVideo = await createVideo(newCardVideo);
    setVideos((prevVideos) => [...prevVideos, createdVideo]);
    // console.log('Video registrado');
  };

  //
  const editVideoCard = async (id: string, updatedVideo: VideoCardData) => {
    const editedVideo = await updateVideo(id, updatedVideo);
    setVideos((prevVideos) =>
      prevVideos.map((video) => (video.id === id ? editedVideo : video))
    );
  };

  //
  const deleteVideoCard = async (id: string) => {
    await deleteVideo(id);
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };


  return (
    <VideoContext.Provider
      value={{
        videos,
        registerVideoCard,
        editVideoCard,
        deleteVideoCard,
        isEditModalOpen,
        toggleEditModal,
        currentVideo,
        setCurrentVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

// esto hace que no se pueda usar el `context` sino está "envuelto" en su `provider`
// eslint-disable-next-line react-refresh/only-export-components
export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideoContext debe usarse dentro de VideoProvider');
  }
  return context;
};
