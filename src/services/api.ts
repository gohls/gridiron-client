import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};