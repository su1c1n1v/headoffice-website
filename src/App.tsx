import { Route, Routes } from 'react-router-dom';
import Main from './layouts/Main';
import NotFould from './pages/common/NotFould';
import Index from './pages/Index';
import Contatos from './pages/Contatos';
import MedicinaEstetica from './pages/MedicinaEstetica';
import Estetica from './pages/Estetica';
import Cabelos from './pages/Cabelos';
import QuemSomos from './pages/QuemSomos';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Index />} />
        <Route path="contatos" element={<Contatos />} />
        <Route path="quem-somos" element={<QuemSomos />} />
        <Route path="medicina-estetica" element={<MedicinaEstetica />} />
        <Route path="estetica" element={<Estetica />} />
        <Route path="cabelos" element={<Cabelos />} />
        <Route path="*" element={<NotFould />} />
      </Route>
    </Routes>
  );
}
