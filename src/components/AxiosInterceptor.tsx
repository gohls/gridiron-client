import { useEffect } from 'react';
import { setupAxiosInterceptors } from '@/services/axiosSetup';
import { useAuth } from '@/hooks/useAuth';

const AxiosInterceptor = () => {
  const { refreshToken } = useAuth();

  useEffect(() => {
    setupAxiosInterceptors(refreshToken);
  }, [refreshToken]);

  return null; 
};

export default AxiosInterceptor;