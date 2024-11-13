import { Route, Routes } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import Rulebook from '@/pages/Rulesbook';
import Champion from '@/pages/Champion';
import ProtectedRoute from '@/routes/ProtectedRoute';
import NotFound from '@/pages/NotFound';

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/" element={<Dashboard />} />
      <Route path="/rulebook" element={<Rulebook />} />
      <Route path="/champion" element={<Champion />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;