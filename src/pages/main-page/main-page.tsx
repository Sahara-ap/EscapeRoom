import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { getCards, isQuestsLoading } from '../../store/cards/cards-selectors';
import { getHasError } from '../../store/app/app.selectors';
import { fetchQuestsAction } from '../../store/api-actions/api-actions';

import { Header } from '../../components/header/header';
import { CardList } from '../../components/card-list/card-list';
import { FilterThemes } from '../../components/filters/filter-themes';
import { FilterLevels } from '../../components/filters/filter-levels';
import ErrorPage from '../error-page/error-page';
import { Preloader } from '../../components/preloader/preloader';
import { EmptyMain } from '../../components/empty-main/empty-main';

import { TLevel, TTheme } from '../../types/types';
import { AppRoute, FilterValue } from '../../consts';


function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cardList = useAppSelector(getCards);
  const hasError = useAppSelector(getHasError);
  const isLoading = useAppSelector(isQuestsLoading);

  const [theme, setTheme] = useState('all');
  const [level, setLevel] = useState('any');

  useEffect(() => {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  function getThemeFilter(themeFilter: TTheme) {
    setTheme(themeFilter);
  }
  function getLevelFilter(levelFilter: TLevel) {
    setLevel(levelFilter);
  }

  const cardListTheme = cardList.filter((card) => {
    if (theme === FilterValue.All) {
      return true;
    } else {
      return card.type === theme;
    }

  });
  const cardListLevel = cardListTheme.filter((card) => {
    if (level === FilterValue.Any) {
      return true;
    } else {
      return card.level === level;
    }
  });
  const cardsIsEmpty = cardListLevel.length === 0;


  if (hasError) {
    return <ErrorPage page='main' />;
  }
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <>
      <Helmet>
        <title>{'Escape Room'}</title>
      </Helmet>
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
          {cardsIsEmpty
            ? <EmptyMain />
            :
            <>
              <h2 className="title visually-hidden">Выберите квест</h2>
              <div className="cards-grid">
                <CardList cards={cardListLevel} />
              </div>
            </>}
        </div>
      </main>
    </>
  );
}

export { MainPage };

