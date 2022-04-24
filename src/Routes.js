import { HashRouter, Routes, Route } from 'react-router-dom';
import { FrontPage } from './pages/FrontPage/FrontPage';
import { MapPage } from './pages/MapPage/MapPage';

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes path="/">
        <Route index element={<FrontPage />} />
        <Route exact path="/mapa" element={<MapPage />} />
      </Routes>
    </HashRouter>
  );
};
