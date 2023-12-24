import { useParams } from 'react-router-dom';
import { BookingForm } from '../../components/booking-form/booking-form';
import { Header } from '../../components/header/header';
import { Map } from '../../components/map/map';
import { Preloader } from '../../components/preloader/preloader';
import { AppRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { getHasError } from '../../store/app/app.selectors';
import { getBookingData, isBookingDataLoading } from '../../store/booking/booking-data-selectors';
import { getSelectedCard } from '../../store/cards/cards-selectors';
import ErrorPage from '../error-page/error-page';
import { useEffect, useState } from 'react';
import { fetchBookingData } from '../../store/api-actions/booking-api-actions';
import { fetchSelectedQuestAction } from '../../store/api-actions/api-actions';
import { TBookingData } from '../../types/types';
import { getPlaceId } from '../../store/booking-form/booking-form-selectors';

function BookingPage(): JSX.Element {
  // const [placeId, setPlaceId] = useState('');
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
  console.log('bookingData', bookingData);

  // const locationCoords = bookingData.map((item) => item.location);
  // function getPlaceId(id: TBookingData['id']) {
  //   setPlaceId(id);
  // }

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
      <Header page={AppRoute.Booking} isExtendedNav />
      {selectedQuest && bookingData &&
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
                      // cb={getPlaceId}
                    />
                  </div>
                </div>
                <p className="booking-map__address">Вы&nbsp;выбрали: {selectedPlace.address}</p>
              </div>
            </div>
            <BookingForm questLocations={bookingData} placeId={placeId}/>
          </div>
        </main>}
    </>
  );
}

export { BookingPage };

