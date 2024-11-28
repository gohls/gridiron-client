import { Divider } from '@/components/tailwind/divider';
import { Heading } from '@/components/tailwind/heading';

const HallOfFame = () => {
  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Hall of Fame</Heading>
      </div>
      <Divider className="mt-2" />
    </>
  );
};

export default HallOfFame;
