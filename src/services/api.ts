import { VideoCardData } from '../context/videoContext';

export const API_URL = 'http://localhost:3000';

// fetching de la data
export const fetchVideos = async () => {
  const response = await fetch(`${API_URL}/videos`);
  return response.json();
};

// agrega nuevo video
export const createVideo = async (newCardVideo: VideoCardData) => {
  const response = await fetch(`${API_URL}/videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCardVideo),
  });
  return response.json();
};

// actualiza video previamente agregado
export const updateVideo = async (id: string, updatedVideo: VideoCardData) => {
  const response = await fetch(`${API_URL}/videos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedVideo),
  });
  return response.json();
};

// elimina video
export const deleteVideo = async (id: string) => {
  const response = await fetch(`${API_URL}/videos/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar el video con id: ${id}`);
  }

  // return true;
};
