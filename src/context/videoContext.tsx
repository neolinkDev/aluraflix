import { createContext, useContext, useState } from 'react';

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
}

// context
// eslint-disable-next-line react-refresh/only-export-components
export const VideoContext = createContext<VideoContextType | undefined>(
  undefined
);

//
export const VideoProvider = ({ children }: {children: React.ReactNode}) => {

  const [videos, setVideos] = useState<VideoCardData[]>([]);

  const registerVideoCard = (newCardVideo: VideoCardData) => {
    setVideos([...videos, newCardVideo]);
  };

  return (
    <VideoContext.Provider value={{ videos, registerVideoCard }}>
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
