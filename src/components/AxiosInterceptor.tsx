import env from '@/config/env';
import { useAuth } from '@/hooks/useAuth';
import api from '@/services/api';

const AxiosInterceptor = () => {
  const { getToken } = useAuth();
  const token = getToken();

  api.interceptors.request.use(
    (config) => {
      if (token && config.withCredentials) {
        config.headers['Authorization'] = `${env.AUTH_HEADER_PREFIX} ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle errors globally
      if (error?.response?.status === 401) {
        // Redirect or handle unauthorized access
        console.error('Unauthorized access');
      }
      return Promise.reject(error);
    }
  );

  return null;
};

export default AxiosInterceptor;
