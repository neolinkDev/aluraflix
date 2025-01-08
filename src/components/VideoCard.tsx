import Button from './Button';

type VideoCardProps = {
  videoCardImage: string;
  bgTitle: string;
  toggleEditModal: () => void;
};

function VideoCard({
  videoCardImage,
  bgTitle,
  toggleEditModal,
}: VideoCardProps) {
  return (
    <div className="w-[373.64px] h-[277.92px]">
      <div className="w-[372.93px] h-[226.66px]">
        <img
          style={{ borderColor: bgTitle }}
          className="w-[372.93px] h-[226.66px] border-[5px]"
          src={videoCardImage}
          alt="Imagen de videocard"
        />
      </div>

      <div
        style={{ borderColor: bgTitle }}
        className="w-[372.77px] h-[51.27px] flex items-center justify-center gap-9 text-white uppercase font-extrabold bg-black border-r-[5px] border-l-[5px] border-b-[5px]"
      >
        <Button label="BORRAR" className="hover:text-gray-300" />
        <Button
          onClick={toggleEditModal}
          label="EDITAR"
          className="hover:text-gray-300"
        />
      </div>
    </div>
  );
}

export default VideoCard;
