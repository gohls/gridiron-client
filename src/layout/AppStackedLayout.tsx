import { ReactNode } from 'react';
import { StackedLayout } from '@/components/tailwind/stacked-layout';

interface AppStackedLayoutProps {
  children: ReactNode;
  navbar: ReactNode;
  sidebar: ReactNode;
}

const AppStackedLayout = ({
  children,
  navbar,
  sidebar,
}: AppStackedLayoutProps) => {
  return (
    <StackedLayout navbar={navbar} sidebar={sidebar}>
      {children}
    </StackedLayout>
  );
};

export default AppStackedLayout;
