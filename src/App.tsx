import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import AxiosInterceptor from '@/components/AxiosInterceptor';
import AppRoute from '@/routes/AppRoute';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AxiosInterceptor />
        <AppRoute />
      </AuthProvider>
    </Router>
  );
};

export default App;
