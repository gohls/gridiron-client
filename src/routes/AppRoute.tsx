import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '@/routes/ProtectedRoute';
import Settings from '@/pages/Settings';
import Dashboard from '@/pages/Dashboard';
import Rulebook from '@/pages/Rulesbook';
import Champion from '@/pages/Champion';
import NotFound from '@/pages/NotFound';
import SignUp from '@/pages/SignUp';
import SignIn from '@/pages/SignIn';

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/" element={<Dashboard />} />
      <Route path="/rulebook" element={<Rulebook />} />
      <Route path="/champion" element={<Champion />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;