import { Avatar } from '@/components/tailwind/avatar';
import {
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/tailwind/dropdown';
import { Cog8ToothIcon, PlusIcon } from '@heroicons/react/16/solid';
import underdog from '@/assets/underdog.svg';
import sleeper from '@/assets/sleeper.jpeg';

const FantasyDropdownMenu = () => {
  return (
    <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
      <DropdownItem href="/fantasy-app/1/settings">
        <Cog8ToothIcon />
        <DropdownLabel>Settings</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/sleeper">
        <Avatar slot="icon" src={sleeper} />
        <DropdownLabel>Sleeper</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="/underdog">
        <Avatar slot="icon" src={underdog} className="bg-underdog-yellow" />
        <DropdownLabel>Underdog</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/fantasy-app/create">
        <PlusIcon />
        <DropdownLabel>New app&hellip;</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
};

export default FantasyDropdownMenu;
