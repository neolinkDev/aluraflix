import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { VideoProvider } from './context/videoContext.tsx';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VideoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VideoProvider>
  </StrictMode>
);
