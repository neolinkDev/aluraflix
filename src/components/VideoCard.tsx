

type VideoCardProps = {
  videoCardImage: string
  bgTitle: string
}

function VideoCard({videoCardImage, bgTitle}: VideoCardProps) {
  return (
    <div className="w-[373.64px] h-[277.92px]">

      <div className="w-[372.93px] h-[226.66px]">
        <img 
          style={{borderColor: bgTitle}}
          className="w-[372.93px] h-[226.66px] border-[5px]" 
          src={videoCardImage} alt="Imagen de videocard" 
          />
      </div>

      <div 
        style={{borderColor: bgTitle}}
        className="w-[372.77px] h-[51.27px] flex items-center justify-center gap-9 text-white uppercase font-extrabold bg-black border-r-[5px] border-l-[5px] border-b-[5px]">
        <p>borrar</p>
        <p>editar</p>
      </div>

    </div>
  )
}

export default VideoCard