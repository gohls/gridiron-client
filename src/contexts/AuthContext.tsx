import { createContext, useState, useEffect } from 'react';
import { get, post } from '@/services/api';
import {
  AuthContextType,
  AuthProviderProps,
  Credentials,
  SignupCredentials,
} from '@/types/auth';
import CryptoJS from 'crypto-js';
import env from '@/config/env';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const getToken = (): string | null => {
    if (token) {
      console.log('State Token: ', token);
      return token;
    }
    const encryptedToken = sessionStorage.getItem(env.AUTH_TOKEN_KEY);
    if (encryptedToken) {
      try {
        const decryptedToken = decryptToken(encryptedToken);
        console.log('Decrypted Token: ', decryptedToken);
        return decryptedToken;
      } catch (error) {
        console.error('Failed to decrypt token', error);
        return null;
      }
    }
    return null;
  };

  const setStateAndSessionToken = (token: string | null) => {
    setToken(token);
    setSessionToken(token);
  };

  const setSessionToken = (token: string | null) => {
    if (token) {
      const encryptedToken = encryptToken(token);
      sessionStorage.setItem(env.AUTH_TOKEN_KEY, encryptedToken);
    } else {
      sessionStorage.removeItem(env.AUTH_TOKEN_KEY);
    }
  };

  const encryptToken = (token: string): string => {
    return CryptoJS.AES.encrypt(token, env.AUTH_SECRET_KEY).toString();
  };

  const decryptToken = (encryptedToken: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, env.AUTH_SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const checkAuthStatus = async (): Promise<void> => {
    const authToken = token || getToken();
    if (authToken) {
      try {
        const response = await get<{ isAuthenticated: boolean }>('auth/status');
        setIsAuthenticated(response.isAuthenticated);
      } catch (error) {
        console.error('Auth status check failed', error);
        setIsAuthenticated(false);
        setStateAndSessionToken(null);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  const signup = async (credentials: SignupCredentials): Promise<any> => {
    try {
      const response = await post<any>('auth/signup/', credentials);
      console.log('Response Token: ', response.token);
      setStateAndSessionToken(response.token);
      setIsAuthenticated(true);
      return response;
    } catch (error) {
      console.error('Signup failed', error);
      throw error;
    }
  };

  const signin = async (credentials: Credentials): Promise<any> => {
    try {
      const response = await post<any>('auth/login/', credentials);
      setStateAndSessionToken(response.token);
      setIsAuthenticated(true);
      return response;
    } catch (error) {
      console.error('Signin failed', error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await post('auth/logout/', {});
    } catch (error) {
      console.error('Logout failed', error);
    } finally {
      setStateAndSessionToken(null);
      setIsAuthenticated(false);
    }
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    signup,
    signin,
    logout,
    getToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
