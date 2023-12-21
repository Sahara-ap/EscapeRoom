import { TLevel, TTheme } from './types/types';

function translateLevelName(levelKey: TLevel) {
  const level = {
    'easy': 'легкий',
    'medium': 'средний',
    'hard': 'сложный',
    'any': 'любой'
  };

  return level[levelKey];
}

function translateThemeName(themeKey: TTheme) {
  const theme = {
    'easy': 'легкий',
    'medium': 'средний',
    'hard': 'сложный',
    'horror': 'Ужасы',
    'mystic': 'Мистика',
    'detective': 'Детектив',
    'adventures': 'Приключения',
    'sci-fi': 'sci-fi',
    'all': 'все квесты'
  };

  return theme[themeKey];
}

export {
  translateLevelName,
  translateThemeName,
};
