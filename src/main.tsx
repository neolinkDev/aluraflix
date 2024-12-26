import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// import { GlobalStyle } from './styles/globalStyles.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <GlobalStyle /> */}
    <App />
  </StrictMode>
);
