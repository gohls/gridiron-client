import { ReactNode } from 'react';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthResponse {
  isAuthenticated: boolean;
  user: User;
  token: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface SignupCredentials extends Credentials {
  email: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signup: (credentials: SignupCredentials) => Promise<any>;
  signin: (credentials: Credentials) => Promise<any>;
  signout: () => Promise<void>;
  checkAuthStatus: () => Promise<any>;
  getToken: () => string | null;
}
