import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavBar.module.css';
import { logout } from '@/Functions/Auth/auth';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
  url: string; // Added a 'url' prop for the URL
}

function NavbarLink({ icon: Icon, label, active, onClick, url }: NavbarLinkProps) {
    const handleClick = () => {
        window.location.href = url; // Change the URL using window.location.href
      };

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={handleClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', url: '/' },
  { icon: IconGauge, label: 'Add Meal Plans', url: '/addMeal' },
  { icon: IconDeviceDesktopAnalytics, label: 'User Profile', url: '/profile' },
//   { icon: IconCalendarStats, label: 'Releases' },
//   { icon: IconUser, label: 'Account' },
//   { icon: IconFingerprint, label: 'Security' },
//   { icon: IconSettings, label: 'Settings' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      url={link.url}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <MantineLogo type="mark" size={30} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        {/* <NavbarLink icon={IconSwitchHorizontal} label="Change account" url='/' /> */}
        <NavbarLink icon={IconLogout} label="Logout" url='/login' onClick={() => logout()} />
      </Stack>
    </nav>
  );
}