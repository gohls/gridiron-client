import env from '@/config/env';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  withCredentials: true,
});

const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api(config);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const get = <T>(url: string, config?: AxiosRequestConfig) =>
  request<T>({ ...config, method: 'get', url });
export const post = <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
  request<T>({ ...config, method: 'post', url, data });

export const put = <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
  request<T>({ ...config, method: 'put', url, data });

export const del = <T>(url: string, config?: AxiosRequestConfig) =>
  request<T>({ ...config, method: 'delete', url });

export default api;
