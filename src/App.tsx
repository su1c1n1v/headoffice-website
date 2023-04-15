import { Route, Routes } from 'react-router-dom';
import Main from './layouts/Main';
import NotFould from './pages/common/NotFould';
import Index from './pages/Index';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Index />} />
        <Route path="*" element={<NotFould />} />
      </Route>
    </Routes>
  );
}
