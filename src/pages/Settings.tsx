import { useAuth } from '@/hooks/useAuth';

const Settings = () => {
  const { user } = useAuth();
  return <div>User ID: {user?.id}</div>;
};

export default Settings;
