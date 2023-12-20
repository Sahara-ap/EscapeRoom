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
    isChecked: true,
  },
  {
    title: 'Приключения',
    logo: '#icon-adventure',
    logoWidth: '36',
    id: 'adventure',
    isChecked: false,
  },
  {
    title: 'Ужасы',
    logo: '#icon-horror',
    logoWidth: '30',
    id: 'horror',
    isChecked: false,
  },
  {
    title: 'Мистика',
    logo: '#icon-mystic',
    logoWidth: '30',
    id: 'mystic',
    isChecked: false,
  },
  {
    title: 'Детектив',
    logo: '#icon-detective',
    logoWidth: '40',
    id: 'detective',
    isChecked: false,
  },
  {
    title: 'Sci-fi',
    logo: '#icon-sci-fi',
    logoWidth: '28',
    id: 'sciFi',
    isChecked: false,
  },
];

export {
  AppRoute,
  AuthStatus,
  FILTER_THEMES,
};
