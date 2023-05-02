import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './layouts/Main';
import NotFould from './pages/common/NotFould';
import Index from './pages/Index';
import Contatos from './pages/Contatos';
import MedicinaEstetica from './pages/MedicinaEstetica';
import Estetica from './pages/Estetica';
import Cabelos from './pages/Cabelos';
import QuemSomos from './pages/QuemSomos';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CuidadosBeleza from './pages/estetica/CuidadosBeleza';
import EsteticaCorpo from './pages/estetica/EsteticaCorpo';
import EsteticaRosto from './pages/estetica/EsteticaRosto';
import LangContext from './components/LangContext';

export default function App() {
  const { i18n } = useTranslation();

  const location = useLocation();

  const [context, setContext] = useState<string>(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(context);
  }, [context]);

  const Lang = useContext(LangContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <LangContext.Provider value={{ context, setContext }}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Index />} />
          <Route path="contatos" element={<Contatos />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="medicina-estetica" element={<MedicinaEstetica />} />
          <Route path="estetica" element={<Estetica />} />
          <Route path="estetica/estetica-rosto" element={<EsteticaRosto />} />
          <Route path="estetica/estetica-corpo" element={<EsteticaCorpo />} />
          <Route path="estetica/cuidados-beleza" element={<CuidadosBeleza />} />
          <Route path="cabelos" element={<Cabelos />} />
          <Route path="*" element={<NotFould />} />
        </Route>
      </Routes>
    </LangContext.Provider>
  );
}
