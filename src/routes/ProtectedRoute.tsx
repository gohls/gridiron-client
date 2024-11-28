import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProtectedRoute = () => {
  const { isAuthenticated, checkAuthStatus } = useAuth();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        await checkAuthStatus();
      }
      setIsChecking(false);
    };

    checkAuth();
  }, [isAuthenticated, checkAuthStatus]);

  if (isChecking) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
