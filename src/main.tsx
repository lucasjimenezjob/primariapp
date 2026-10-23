import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Gallery } from './screens/Gallery';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>{location.hash === '#galeria' ? <Gallery /> : <App />}</StrictMode>,
);
