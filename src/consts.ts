import { TFilterThemes } from './types/types';

enum AppRoute {
  Booking = '/booking',
  Contacts = '/contacts',
  Login = '/login',
  Main = '/',
  MyQuests = '/my-quests',
  Quest = '/quest',
  NotFound = '*'
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const FILTER_THEMES: TFilterThemes[] = [
  {
    title: 'Все квесты',
    logo: '#icon-all-quests',
    logoWidth: '26',
    id: 'all',
  },
  {
    title: 'Приключения',
    logo: '#icon-adventure',
    logoWidth: '36',
    id: 'adventure',
  },
  {
    title: 'Ужасы',
    logo: '#icon-horror',
    logoWidth: '30',
    id: 'horror',
  },
  {
    title: 'Мистика',
    logo: '#icon-mystic',
    logoWidth: '30',
    id: 'mystic',
  },
  {
    title: 'Детектив',
    logo: '#icon-detective',
    logoWidth: '40',
    id: 'detective',
  },
  {
    title: 'Sci-fi',
    logo: '#icon-sci-fi',
    logoWidth: '28',
    id: 'sciFi',
  },
];

export {
  AppRoute,
  AuthStatus,
  FILTER_THEMES,
};
