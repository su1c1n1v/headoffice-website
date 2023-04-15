import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Route from './App';
import './services/i18n.ts';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Route />
  </BrowserRouter>
);
