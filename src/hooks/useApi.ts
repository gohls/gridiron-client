import { useState, useEffect } from 'react';
import { get, post, put, del } from '@/services/api';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface UseApiOptions<T> {
  endpoint: string;
  method?: HttpMethod;
  body?: any;
}

function useApi<T>({ endpoint, method = 'GET', body }: UseApiOptions<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let result: T;
        switch (method) {
          case 'GET':
            result = await get<T>(endpoint);
            break;
          case 'POST':
            result = await post<T>(endpoint, body);
            break;
          case 'PUT':
            result = await put<T>(endpoint, body);
            break;
          case 'DELETE':
            result = await del<T>(endpoint);
            break;
          default:
            throw new Error(`Unsupported method: ${method}`);
        }
        setData(result);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, body]);

  return { data, loading, error };
}

export default useApi;
