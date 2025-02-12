import { useEffect, useState } from 'react';
import { categories } from '../constants/categories';

import Category from '../components/Category';
import { deleteVideo, getVideos, type Video } from '../services/api';

import { Loader } from '../components/Loader';
import { Alert } from '../components/Alert';
import Banner from '../components/Banner';
import playerJPG from '/player.jpg';
import playerAVIF from '/player.avif';

const playerImages = {
  jpg: playerJPG,
  avif: playerAVIF,
};

export default function HomePage() {

  // state que toma la data que viene de la API
  const [videos, setVideos] = useState<Video[]>([]);

  // se encarga de mostrar el loader o no
  const [isLoading, setIsLoading] = useState(true);

  // se encarga de manejar los errores cuando carga los videos desde la API
  const [error, setError] = useState<string | null>(null)

  // state que maneja los errores al eliminar una card
  const [deleteError, setDeleteError] = useState<string | null>(null)

  // carga videos al montar por primera vez el componente
  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await getVideos()
        setVideos(data);
        setError(null)
      } catch (error) {
        // console.log(error)
        setError(error instanceof Error ? error.message : 'Error al cargar videos')
      } finally {
        setIsLoading(false);
      }
    }
    loadVideos()
  }, [])


  // maneja la eliminación de la card
  const handleDelete = async (id: string) => {
    const resultado = confirm("¿Estás seguro que deseas eliminar la card?");

    try {
      if(resultado){
        await deleteVideo(id)
        setVideos(videos.filter(video => video.id !== id))
        setDeleteError(null)

        alert("¡Card eliminada correctamente!"); 
      }

    } catch (error) {
      setDeleteError(error instanceof Error ? error.message : 'Failed to delete user')
    }
  }

  // si encuentra un error regresa solo la alerta
  if(error) return error && <Alert type="error" message={error} />
  if(deleteError) return deleteError && <Alert type="error" message={deleteError} />
  
  return (
    <>
      <Banner playerImages={playerImages} />
      {
        isLoading ? (
          // <p className='text-3xl text-yellow-300 text-center mb-[93px]'>cargando...</p>
          <Loader />
        ):(
          categories.map((category) => 
            <Category
              key={category.title} 
              category={category}
              videos={videos.filter((video) => video.category === category.value)}
              onDelete={handleDelete}
            />)
        )
      }
    </>


  );
}
