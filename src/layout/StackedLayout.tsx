import { ReactNode } from 'react';
import { StackedLayout as TailwindStackedLayout } from '@/components/tailwind/stacked-layout';

interface AppStackedLayoutProps {
  children: ReactNode;
  navbar: ReactNode;
  sidebar: ReactNode;
}

const StackedLayout = ({
  children,
  navbar,
  sidebar,
}: AppStackedLayoutProps) => {
  return (
    <TailwindStackedLayout navbar={navbar} sidebar={sidebar}>
      {children}
    </TailwindStackedLayout>
  );
};

export default StackedLayout;
