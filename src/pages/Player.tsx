import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useVideoContext } from '../context/videoContext';


function Player() {
  const { videos } = useVideoContext();
  const params = useParams<{ id: string }>(); 
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll al tope al montar el componente
  }, []);
  
  const video = videos.find((video) => video.id === params.id);

  // Redirigir si el video no existe
  useEffect(() => {
    // Redirige y reemplaza la entrada del historial, `replace: true` evita que el usuario pueda volver a la URL inválida.
    if (!video) {
      navigate('/not-found', { replace: true }); 
    }
  }, [video, navigate]);
 
  if (!video) {
    return null;
  }
  // if (!video) {
  //   return <p className='text-slate-100 text-center'>Video no encontrado</p>;
  // }
 
  return (
    <section className='flex flex-col gap-2 max-w-[560px] mx-auto w-[90%] pb-8 pt-8'>
      <iframe
        width="100%"
        height="315"
        src={video.videoValue}
        title={video.titleValue}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className='text-slate-200 text-xl'>{video.titleValue}</h3>
      <p className='text-slate-400'>{video.descriptionValue}</p>
    </section>
  );
}

export default Player;
