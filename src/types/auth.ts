import { ReactNode } from "react";

export interface Credentials {
    username: string;
    password: string;
  }
  
export interface AuthProviderProps {
    children: ReactNode;
}

export interface AuthContextType {
    isAuthenticated: boolean;
    login: (credentials: Credentials) => Promise<any>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>;
}