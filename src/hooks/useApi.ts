import { useState, useEffect } from 'react';
import { fetchData } from '@/services/api';

const useApi = (endpoint: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchApiData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useApi;