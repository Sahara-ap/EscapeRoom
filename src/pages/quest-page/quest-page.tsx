import { Link, useParams } from 'react-router-dom';

import { AppRoute } from '../../consts';
import { translateLevelName, translateThemeName } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';

import { Header } from '../../components/header/header';
import { getHasError, getSelectedCard, isQuestsLoading } from '../../store/cards/cards-selectors';
import { useEffect } from 'react';
import { fetchSelectedQuestAction } from '../../store/api-actions';
import ErrorPage from '../error-page/error-page';
import { Preloader } from '../../components/preloader/preloader';

function QuestPage(): JSX.Element {
  const hasError = useAppSelector(getHasError);
  const isLoading = useAppSelector(isQuestsLoading);
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const selectedQuest = useAppSelector(getSelectedCard);

  useEffect(() => {
    if (id) {
      dispatch(fetchSelectedQuestAction(id));
    }
  }, [id, dispatch]);


  if (hasError) {
    return <ErrorPage />;
  }
  if (isLoading) {
    return <Preloader />;
  }


  return (
    <>
      <Header page={AppRoute.Quest} />
      {selectedQuest &&
        <main className="decorated-page quest-page">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source type="image/webp" srcSet={selectedQuest.coverImgWebp} />
              <img src={selectedQuest.coverImg} srcSet={selectedQuest.coverImg} width="1366" height="768" alt="" />
            </picture>
          </div>
          <div className="container container--size-l">
            <div className="quest-page__content">
              <h1 className="title title--size-l title--uppercase quest-page__title">{selectedQuest.title}</h1>
              <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{translateThemeName(selectedQuest.type)}
              </p>
              <ul className="tags tags--size-l quest-page__tags">
                <li className="tags__item">
                  <svg width="11" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-person"></use>
                  </svg>{selectedQuest.peopleMinMax[0]}&ndash;{selectedQuest.peopleMinMax[1]}&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-level"></use>
                  </svg>{translateLevelName(selectedQuest.level)}
                </li>
              </ul>
              <p className="quest-page__description">{selectedQuest.description}</p>
              <Link className="btn btn--accent btn--cta quest-page__btn" to={`${AppRoute.Booking}/${selectedQuest.id}`}>Забронировать</Link>
            </div>
          </div>
        </main>}
    </>
  );
}

export { QuestPage };
