import { useEffect } from 'react';
import { CardList } from '../../components/card-list/card-list';
import { Header } from '../../components/header/header';
import { AppRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { getMyQuests, isMyQuestsLoading } from '../../store/mycards/mycards-selectors';
import { fetchMyQuestsAction } from '../../store/api-actions';
import { TMyReservedQuest, TPartialMyReservedQuest } from '../../types/types';
import ErrorPage from '../error-page/error-page';
import { Preloader } from '../../components/preloader/preloader';
import { getHasError } from '../../store/app/app.selectors';

function MyQuestsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const hasError = useAppSelector(getHasError);
  const isLoading = useAppSelector(isMyQuestsLoading);
  const myQuests = useAppSelector(getMyQuests);
  const myQuestClone = structuredClone(myQuests);

  const shortDataList = myQuests.map((item: TMyReservedQuest) => {
    const value = item.quest;
    return value;

  });


  const extendedDataList: TPartialMyReservedQuest[]
    = myQuestClone.map((item: TMyReservedQuest) => {
      const value = {
        date: item.date,
        time: item.time,
        contactPerson: item.contactPerson,
        phone: item.phone,
        withChildren: item.withChildren,
        peopleCount: item.peopleCount,
        id: item.id,
        location: item.location
      };

      return value;
    });

  useEffect(() => {
    dispatch(fetchMyQuestsAction());
  }, [dispatch]);

  if (isLoading) {
    return <Preloader />;
  }
  if (hasError) {
    return <ErrorPage page='myquest' />;
  }
  return (
    <>
      <Header page={AppRoute.MyQuests} isExtendedNav />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <div className="cards-grid">
            <CardList cards={shortDataList} myCard={extendedDataList} />
          </div>
        </div>
      </main>
    </>
  );
}

export { MyQuestsPage };
