import { useEffect, useState } from 'react';

import { AppRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';

import { Header } from '../../components/header/header';
import { CardList } from '../../components/card-list/card-list';
import { getCards, getHasError } from '../../store/cards/cards-selectors';

import { TCard, TLevel, TTheme } from '../../types/types';
import { FilterThemes } from '../../components/filters/filter-themes';
import { FilterLevels } from '../../components/filters/filter-levels';
import { fetchQuestsAction } from '../../store/api-actions';
import ErrorPage from '../error-page/error-page';


function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cardList = useAppSelector(getCards);
  const hasError = useAppSelector(getHasError);

  const [cardId, setCardId] = useState('');
  const [theme, setTheme] = useState('all');
  const [level, setLevel] = useState('any');

  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  function getCardId(cardIdentificator: TCard['id']) {
    setCardId(cardIdentificator);
  }

  function getThemeFilter(themeFilter: TTheme) {
    setTheme(themeFilter);
  }

  function getLevelFilter(levelFilter: TLevel) {
    setLevel(levelFilter);
  }

  const cardListTheme = cardList.filter((card) => {
    if (theme === 'all') {
      return true;
    } else {
      return card.type === theme;
    }

  });
  const cardListLevel = cardListTheme.filter((card) => {
    if (level === 'any') {
      return true;
    } else {
      return card.level === level;
    }
  });


  if (hasError) {
    return <ErrorPage/>;
  }

  return (
    <>
      <Header isExtendedNav page={AppRoute.Main} />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <FilterThemes cb={getThemeFilter} />
              <FilterLevels cb={getLevelFilter} />
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            <CardList cards={cardListLevel} cb={getCardId} />
          </div>
        </div>
      </main>
    </>
  );
}

export { MainPage };

