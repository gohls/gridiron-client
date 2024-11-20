import { useAuth } from '@/hooks/useAuth';

const UserProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user?.username}</h1>
      <p>Email: {user?.email}</p>
      <p>ID: {user?.id}</p>
    </div>
  );
};

export default UserProfile;
