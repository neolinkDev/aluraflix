
// const API_BASE_URL = 'http://localhost:3000';
const API_BASE_URL ='https://67acf0643f5a4e1477dc6207.mockapi.io/videos';

export interface Video {
  id?: string;
  title: string;
  category: string;
  imageURL: string;
  videoURL: string;
  description: string;
}

// fetching videos
export const getVideos = async (): Promise<Video[]> => {
  try {
    // const response = await fetch(`${API_BASE_URL}/videos`);
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) throw new Error('Error al cargar videos');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// crea nuevo video
// export const createVideo= async (user: Omit<Video, 'id'>): Promise<Video> => {
export const createVideo= async (newVideo: Video): Promise<Video> => {
  try {
    // const response = await fetch(`${API_BASE_URL}/videos`, {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newVideo),
    })
    if (!response.ok) throw new Error('Error al crear video')
    return await response.json()
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// obtiene el video a actualizar mediante su ID
export const getVideo = async (id: string): Promise<Video> => {
  try {
    // const response = await fetch(`${API_BASE_URL}/videos/${id}`)
    const response = await fetch(`${API_BASE_URL}/${id}`)
    if (!response.ok) throw new Error('Video no encontrado')
    return await response.json()
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// actualiza video previamente agregado
export const updateVideo = async (id: string, video: Video): Promise<Video> => {
  try {
    // const response = await fetch(`${API_BASE_URL}/videos/${id}`, {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(video),
    })
    if (!response.ok) throw new Error('Error al actualizar video')
    return await response.json()
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// uso del verbo `DELETE` para borrar la card de video
export const deleteVideo = async (id: string): Promise<void> => {
  try {
    // const response = await fetch(`${API_BASE_URL}/videos/${id}`, {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error('Error al borrar card')
  } catch (error) {
    console.error(error);
    throw error;
  }
}