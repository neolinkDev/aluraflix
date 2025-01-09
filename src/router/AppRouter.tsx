import { Route, Routes } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import NuevoVideoPage from '../pages/NuevoVideoPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nuevo-video" element={<NuevoVideoPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
