import { createContext, useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { AuthContextType, AuthProviderProps, Credentials, SignupCredentials } from '@/types/auth';


export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
   
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async (): Promise<void> => {
    try {
      const response = await axios.get<{ isAuthenticated: boolean }>('http://127.0.0.1:8000/api/core/auth/status', { withCredentials: true });
      setIsAuthenticated(response.data.isAuthenticated);
    } catch (error) {
      console.log(error)
      setIsAuthenticated(false);
    }
  };

  const signup = async (credentials: SignupCredentials): Promise<any> => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/signup/', credentials, { withCredentials: true });
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const signin = async (credentials: Credentials): Promise<any> => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', credentials, { withCredentials: true });
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      console.log(error)
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await axios.post('http://127.0.0.1:8000/api/auth/logout/', {}, { withCredentials: true });
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const refreshToken = async (): Promise<void> => {
    try {
      await axios.post('http://127.0.0.1:8000/api/auth/refresh/', {}, { withCredentials: true });
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    signup,
    signin,
    logout,
    refreshToken, 
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};