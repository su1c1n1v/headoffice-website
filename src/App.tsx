import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './layouts/Main';
import NotFould from './pages/common/NotFould';
import Index from './pages/Index';
import Contatos from './pages/Contatos';
import MedicinaEstetica from './pages/MedicinaEstetica';
import Cabelos from './pages/Cabelos';
import QuemSomos from './pages/QuemSomos';
import { useEffect } from 'react';
import CuidadosBeleza from './pages/estetica/CuidadosBeleza';
import EsteticaCorpo from './pages/estetica/EsteticaCorpo';
import EsteticaRosto from './pages/estetica/EsteticaRosto';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Index />} />
        <Route path="contatos" element={<Contatos />} />
        <Route path="quem-somos/:id?" element={<QuemSomos />} />
        <Route path="medicina-estetica/:id?" element={<MedicinaEstetica />} />
        <Route
          path="estetica/estetica-rosto/:id?"
          element={<EsteticaRosto />}
        />
        <Route
          path="estetica/estetica-corpo/:id?"
          element={<EsteticaCorpo />}
        />
        <Route
          path="estetica/cuidados-beleza/:id?"
          element={<CuidadosBeleza />}
        />
        <Route path="cabelos/:id?" element={<Cabelos />} />
        <Route path="*" element={<NotFould />} />
      </Route>
    </Routes>
  );
}
