import { Avatar } from '@/components/tailwind/avatar';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/tailwind/dropdown';
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from '@/components/tailwind/navbar';
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import { InboxIcon } from '@heroicons/react/20/solid';
import viteLogo from '@/assets/vite.svg';
import reactLogo from '@/assets/react.svg';
import FantasyDropdownMenu from '@/components/navigation/FantasyDropdownMenu';
import { navItems } from '@/routes/routeConfig';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Field } from '../tailwind/fieldset';
import { Select } from '../tailwind/select';
import { Text } from '../tailwind/text';

const AppNavbar = () => {
  const { signout } = useAuth();
  const location = useLocation();

  return (
    <Navbar>
      <Dropdown>
        <DropdownButton as={NavbarItem} className="max-lg:hidden">
          <Avatar src={viteLogo} />
          <NavbarLabel>GridIron Hub</NavbarLabel>
          <ChevronDownIcon />
        </DropdownButton>
        <FantasyDropdownMenu />
      </Dropdown>
      <NavbarDivider className="max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url }) => (
          <NavbarItem
            key={label}
            href={url}
            current={location.pathname === url}
          >
            {label}
          </NavbarItem>
        ))}
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <Field className="flex items-center gap-4">
          <Text>League</Text>
          <Select name="status ">
            <option value="active">All</option>
            <option value="league_of_extraordinary_degenerates">
              League of Extraordinary Degenerates
            </option>
            <option value="pro_fantasizers">Pro Fantasizers</option>
            <option value="all_fasntasy_football_makes">
              All Fasntasy Football Makes...
            </option>
            <option value="how_do_you_like_them_league">
              How Do You Like Them League
            </option>
          </Select>
        </Field>
        <NavbarItem href="/inbox" aria-label="Inbox">
          <InboxIcon />
        </NavbarItem>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar src={reactLogo} square />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="bottom end">
            <DropdownItem href="/my-profile">
              <UserIcon />
              <DropdownLabel>My profile</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/settings">
              <Cog8ToothIcon />
              <DropdownLabel>Settings</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/privacy-policy">
              <ShieldCheckIcon />
              <DropdownLabel>Privacy policy</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/share-feedback">
              <LightBulbIcon />
              <DropdownLabel>Share feedback</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/landing" onClick={signout}>
              <ArrowRightStartOnRectangleIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </Navbar>
  );
};

export default AppNavbar;
