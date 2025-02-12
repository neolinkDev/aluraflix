import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getVideo, type Video } from "../services/api";
import { Loader } from "../components/Loader";
import { Alert } from "../components/Alert";

export default function VideoDetailsPage() {

  const { id } = useParams();

  // state que maneja los detalles del video al que se le da click
  const [video, setVideo] = useState<Video | null>(null)

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadVideo = async () => {
      try {
        if (!id) throw new Error('ID de video inválido')

        const selectedVideoData = await getVideo(id)
        setVideo(selectedVideoData)
        setError(null)
      } catch (error) {
        setError(error instanceof Error ? error.message :'Error al cargar la información del video')
      } finally {
        setIsLoading(false)
      }
    }
    loadVideo();
  }, [id])

  if (isLoading) return <Loader />
  if (error) return <Alert type="error" message={error} />
  if (!video) return <Alert type="error" message="Video no encontrado" />

  return (
    <section className='flex flex-col gap-2 max-w-[560px] mx-auto w-[90%] pb-8 pt-8'>
      <iframe
        width="100%"
        height="315"
        src={video.videoURL}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className='text-slate-200 text-xl'>{video.title}</h3>
      <p className='text-slate-400'>{video.description}</p>
    </section>
  )
}

