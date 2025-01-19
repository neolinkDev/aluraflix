import { Link } from 'react-router-dom';
import { useVideoContext, VideoCardData } from '../context/videoContext';
import Button from './Button';

type VideoCardProps = {
  // videoCardImage: string;
  bgTitle: string;
  // toggleEditModal: () => void;
  video: VideoCardData
};

function VideoCard({
  // videoCardImage,
  bgTitle,
  // toggleEditModal,
  video
}: VideoCardProps) {

  const { toggleEditModal, setCurrentVideo, deleteVideoCard } = useVideoContext();

  const handleDelete = () => {
    const resultado = confirm("¿Estás seguro de que deseas eliminar el video?");
    if (resultado) {
      deleteVideoCard(video.id!)
    } 
  }
  
  const handleEdit = () => {
    setCurrentVideo(video);
    toggleEditModal();
  };
  
  return (
    <div className="w-[373.64px] h-[277.92px]">
      <Link to={`/${video.id}`}>
        <div className="w-[372.93px] h-[226.66px]">
          <img
            style={{ borderColor: bgTitle }}
            className="w-[372.93px] h-[226.66px] border-[5px]"
            src={video.imageValue}
            alt="Imagen de videocard"
          />
        </div>
      </Link>

      <div
        style={{ borderColor: bgTitle }}
        className="w-[372.77px] h-[51.27px] flex items-center justify-center gap-9 text-white uppercase font-extrabold bg-black border-r-[5px] border-l-[5px] border-b-[5px]"
      >
        <Button  
          onClick={handleDelete}
          label="BORRAR" 
          className="hover:text-gray-300" 
        />
        
        <Button
          onClick={handleEdit}
          label="EDITAR"
          className="hover:text-gray-300"
        />
      </div>
    </div>
  );
}

export default VideoCard;
