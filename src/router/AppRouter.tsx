import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import HomePage from '../routes/HomePage';
import NuevoVideoPage from '../routes/NuevoVideoPage';
import VideoDetailsPage from '../routes/VideoDetailsPage';
import NotFoundPage from '../routes/NotFoundPage';

export const AppRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/nuevo-video', element: <NuevoVideoPage /> },
      { path: '/editar/:id', element: <NuevoVideoPage /> },
      { path: '/videos/:id', element: <VideoDetailsPage /> },
      { path: '*', element: <NotFoundPage /> }
    ],
  },
]);
