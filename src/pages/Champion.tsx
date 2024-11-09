import useApi from '@/hooks/useApi';

const Champion = () => {
  const { data, loading, error } = useApi('champion');
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error?.message}</p>;

    return (
        <div>
          <h1>Champion Data</h1>
          {data ? (
            <div>
              {data}
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
      );
  };
  
  export default Champion;