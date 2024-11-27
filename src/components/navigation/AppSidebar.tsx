import { Avatar } from '@/components/tailwind/avatar';
import { Dropdown, DropdownButton } from '@/components/tailwind/dropdown';
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from '@/components/tailwind/sidebar';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import viteLogo from '@/assets/vite.svg';
import FantasyDropdownMenu from '@/components/navigation/FantasyDropdownMenu';
import { navItems } from '@/routes/routeConfig';

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem} className="lg:mb-2.5">
            <Avatar src={viteLogo} />
            <SidebarLabel>League Hub</SidebarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <FantasyDropdownMenu />
        </Dropdown>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.map(({ label, url }) => (
            <SidebarItem key={label} href={url}>
              {label}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
};

export default AppSidebar;
