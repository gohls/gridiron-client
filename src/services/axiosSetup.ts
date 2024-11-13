import { CustomAxiosRequestConfig } from '@/types/axios';
import axios, { AxiosError, AxiosResponse } from 'axios';


export const setupAxiosInterceptors = (refreshToken: () => Promise<void>): void => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          await refreshToken();
          return axios(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};