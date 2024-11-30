import { Button } from '@/components/tailwind/button';
import { Checkbox, CheckboxField } from '@/components/tailwind/checkbox';
import { Divider } from '@/components/tailwind/divider';
import { Description, Label } from '@/components/tailwind/fieldset';
import { Heading, Subheading } from '@/components/tailwind/heading';
import { Input } from '@/components/tailwind/input';
import { Select } from '@/components/tailwind/select';
import { Text } from '@/components/tailwind/text';
import { Textarea } from '@/components/tailwind/textarea';

import { useAuth } from '@/hooks/useAuth';
import { Address } from './Address';
import { Switch, SwitchField } from '@/components/tailwind/switch';
import reactLogo from '@/assets/react.svg';
import { Avatar } from '@/components/tailwind/avatar';

const Settings = () => {
  const { user } = useAuth();
  return (
    <form method="post" className="mx-auto max-w-4xl">
      <Heading>Settings</Heading>
      <Divider className="my-10 mt-6" />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Avatar className="size-16" src={reactLogo} />
        </div>
        <SwitchField>
          <Label>Public Profile</Label>
          <Description>
            Other users can search and view your profile.
          </Description>
          <Switch name="allow_embedding" defaultChecked />
        </SwitchField>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Username</Subheading>
          <Text>This will be displayed on your public profile.</Text>
        </div>
        <div>
          <Input
            aria-label="Username"
            name="name"
            defaultValue={user?.username}
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>User Email</Subheading>
          <Text>
            This is used for password reset, user invites, notifications, etc.
          </Text>
        </div>
        <div className="space-y-4">
          <Input
            type="email"
            aria-label="Organization Email"
            name="email"
            defaultValue={user?.email}
          />
          <CheckboxField>
            <Checkbox name="email_is_public" defaultChecked />
            <Label>Show email on public profile</Label>
          </CheckboxField>
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Bio</Subheading>
          <Text>
            This will be displayed on your public profile. Maximum 240
            characters.
          </Text>
        </div>
        <div>
          <Textarea aria-label="Organization Bio" name="bio" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Address</Subheading>
          <Text>This is where your organization is registered.</Text>
        </div>
        <Address />
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Currency</Subheading>
          <Text>The currency that your organization will be collecting.</Text>
        </div>
        <div>
          <Select aria-label="Currency" name="currency" defaultValue="cad">
            <option value="cad">CAD - Canadian Dollar</option>
            <option value="usd">USD - United States Dollar</option>
          </Select>
        </div>
      </section>

      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Reset
        </Button>
        <Button type="submit">Save changes</Button>
      </div>
    </form>
  );
};

export default Settings;
