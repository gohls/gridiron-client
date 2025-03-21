import { Divider } from '@/components/tailwind/divider';
import { Heading } from '@/components/tailwind/heading';

const Home = () => {
  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Home</Heading>
      </div>
      <Divider className="mt-2" />
    </>
  );
};

export default Home;
