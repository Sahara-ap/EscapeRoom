import { useState } from 'react';

import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks/store-hooks';

import { Header } from '../../components/header/header';
import { CardList } from '../../components/card-list/card-list';
import { getCards } from '../../store/cards/cards-selectors';

import { TCard } from '../../types/types';
import { FilterThemes } from '../../components/filters/filter-themes';


function MainPage(): JSX.Element {
  const cardList = useAppSelector(getCards);

  const [cardId, setCardId] = useState('');

  function getCardId(cardIdentificator: TCard['id']) {
    setCardId(cardIdentificator);
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

              <FilterThemes />
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <ul className="filter__list">
                  <li className="filter__item">
                    <input type="radio" name="level" id="any" defaultChecked />
                    <label className="filter__label" htmlFor="any"><span className="filter__label-text">Любой</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="level" id="easy" />
                    <label className="filter__label" htmlFor="easy"><span className="filter__label-text">Лёгкий</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="level" id="middle" />
                    <label className="filter__label" htmlFor="middle"><span className="filter__label-text">Средний</span>
                    </label>
                  </li>
                  <li className="filter__item">
                    <input type="radio" name="level" id="hard" />
                    <label className="filter__label" htmlFor="hard"><span className="filter__label-text">Сложный</span>
                    </label>
                  </li>
                </ul>
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            <CardList cards={cardList} cb={getCardId} />
          </div>
        </div>
      </main>
    </>
  );
}

export { MainPage };

