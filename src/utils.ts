import { store } from './store';
import { clearErrorAction } from './store/api-actions';
import { setError } from './store/app/app-slice';
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

function processErrorHandle(message: string): void {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
}

export {
  translateLevelName,
  translateThemeName,
  processErrorHandle,
};
