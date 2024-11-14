import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import Header from '@/components/layout/Header';
import AxiosInterceptor from '@/components/AxiosInterceptor';
import AppRoute from '@/routes/AppRoute';


const App = () => {
  return (
    <Router>
      <AuthProvider>
      <AxiosInterceptor /> 
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoute />
        </main>
      </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
