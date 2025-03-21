import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Rulebook = lazy(() => import('@/pages/Rulebook'));
const Profile = lazy(() => import('@/pages/Profile'));
const Champion = lazy(() => import('@/pages/Champion'));
const Settings = lazy(() => import('@/pages/Settings'));
const HallOfFame = lazy(() => import('@/pages/HallOfFame'));

export const ROUTES = {
  HOME: '/',
  RULEBOOK: '/rulebook',
  SETTINGS: '/settings',
  PROFILE: '/my-profile',
  CHAMPION: '/champion',
  HALL_OF_FAME: '/hall-of-fame',
  FANTASY_USER_SETUP: '/fantasy-user-setup',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
};

export const protectedRoutes = [
  { path: ROUTES.HOME, element: Home, label: 'Home' },
  { path: ROUTES.RULEBOOK, element: Rulebook, label: 'Rulebook' },
  { path: ROUTES.CHAMPION, element: Champion, label: 'Champion' },
  { path: ROUTES.HALL_OF_FAME, element: HallOfFame, label: 'HoF' },
  { path: ROUTES.SETTINGS, element: Settings, label: 'Settings' },
  { path: ROUTES.PROFILE, element: Profile, label: 'Profile' },
];

export const navItems = [
  { label: 'Home', url: ROUTES.HOME },
  { label: 'Rulebook', url: ROUTES.RULEBOOK },
  { label: 'Champion', url: ROUTES.CHAMPION },
  { label: 'Hall of Fame', url: ROUTES.HALL_OF_FAME },
];
