import { VideoCardData } from '../context/videoContext';

// export const API_URL = 'http://localhost:3000';
export const API_URL ='https://679824fcc2c861de0c6ef76c.mockapi.io/videos';

// fetching de la data
export const fetchVideos = async (): Promise<VideoCardData[]> => {

  try {
    // const response = await fetch(`${API_URL}/videos`);
    const response = await fetch(`${API_URL}`);

    if(!response.ok){
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error en la solicitud');
    }

    return response.json();
    
  } catch (error) {
    console.error('Error en fetchVideos:', error);
    throw error;      
  }
};

// agrega nuevo video
export const createVideo = async (newCardVideo: VideoCardData) => {
  // throw new Error("Error al crear el video");
  try {
    
    // const response = await fetch(`${API_URL}/videos`, {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCardVideo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al crear el video');
    }

    return response.json();
  } catch (error) {
    console.error('Error en createVideo:', error);
    throw error; 
  }
};

// actualiza video previamente agregado
export const updateVideo = async (id: string, updatedVideo: VideoCardData) => {

  try {
    
    // const response = await fetch(`${API_URL}/videos/${id}`, {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedVideo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al actualizar el video');
    }

    return response.json();
  } catch (error) {
    console.error('Error en updateVideo:', error);
    throw error; 
  }
};

// elimina video
export const deleteVideo = async (id: string) => {
  // const response = await fetch(`${API_URL}/videos/${id}`, {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar el video con id: ${id}`);
  }

  // return true;
};
