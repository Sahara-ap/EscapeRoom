import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { getBookingData, isBookingDataLoading } from '../../store/booking/booking-data-selectors';
import { getHasError } from '../../store/app/app.selectors';
import { getSelectedCard } from '../../store/cards/cards-selectors';
import { fetchBookingData } from '../../store/api-actions/booking-api-actions';
import { fetchSelectedQuestAction } from '../../store/api-actions/api-actions';
import { getPlaceId } from '../../store/booking-form/booking-form-selectors';

import { BookingForm } from '../../components/booking-form/booking-form';
import { Header } from '../../components/header/header';
import { Map } from '../../components/map/map';
import { Preloader } from '../../components/preloader/preloader';
import ErrorPage from '../error-page/error-page';

import { AppRoute } from '../../consts';

function BookingPage(): JSX.Element {
  const placeId = useAppSelector(getPlaceId);
  const { id: questId } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (questId) {
      dispatch(fetchBookingData(questId));
    }
  }, [dispatch, questId]);

  useEffect(() => {
    if (questId) {
      dispatch(fetchSelectedQuestAction(questId));
    }
  }, [dispatch, questId]);

  const hasError = useAppSelector(getHasError);
  const isLoading = useAppSelector(isBookingDataLoading);

  const bookingData = useAppSelector(getBookingData);
  const selectedQuest = useAppSelector(getSelectedCard);

  const selectedPlaceDefault = bookingData[0]?.location;
  const selectedPlace = bookingData.find((item) => item.id === placeId)?.location ?? selectedPlaceDefault;

  if (hasError) {
    return <ErrorPage page='quest' />;
  }
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <>
      <Helmet>
        <title>{'Бронирование квеста - Escape Room'}</title>
      </Helmet>
      <Header page={AppRoute.Booking} isExtendedNav />
      {selectedQuest && selectedPlace &&
        <main className="page-content decorated-page">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
              />
              <img
                src={selectedQuest.coverImg}
                srcSet={selectedQuest.coverImgWebp}
                width="1366"
                height="1959"
                alt=""
              />
            </picture>
          </div>
          <div className="container container--size-s">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
              </h1>
              <p className="title title--size-m title--uppercase page-content__title">{selectedQuest.title}</p>
            </div>
            <div className="page-content__item">
              <div className="booking-map">
                <div className="map">
                  <div className="map__container">
                    <Map
                      page={'booking'}
                      places={bookingData}
                    />
                  </div>
                </div>
                <p className="booking-map__address">Вы&nbsp;выбрали: {selectedPlace.address}</p>
              </div>
            </div>
            <BookingForm questLocations={bookingData} selectedQuest={selectedQuest} placeId={placeId} />
          </div>
        </main>}
    </>
  );
}

export { BookingPage };

