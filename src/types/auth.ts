import { ReactNode } from "react";

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
    isAuthenticated: boolean;
    signup: (credentials: SignupCredentials) => Promise<any>;
    signin: (credentials: Credentials) => Promise<any>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>;
}