import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { getBookingSendingStatus } from '../../store/booking-form/booking-form-selectors';
import { sendBookingData } from '../../store/api-actions/booking-api-actions';
import { setError } from '../../store/app/app-slice';
import { clearErrorAction } from '../../store/api-actions/api-actions';

import { convertTime } from '../../utils';
import { AppRoute, LoadingDataStatus } from '../../consts';

import { TBookingData } from '../../types/types';

type TBookingFormProps = {
  questLocations: TBookingData[];
  placeId: TBookingData['id'];
}

function BookingForm({ questLocations, placeId }: TBookingFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const sendingStatus = useAppSelector(getBookingSendingStatus);

  const defaultTodaySlots = questLocations.map((item) => item.slots.today)[0];
  const todaySlots = questLocations.find((questLocation) => questLocation.id === placeId)?.slots.today ?? defaultTodaySlots;

  const defaultTomorrowSlots = questLocations.map((item) => item.slots.today)[0];
  const tomorrowSlots = questLocations.find((questLocation) => questLocation.id === placeId)?.slots.tomorrow ?? defaultTomorrowSlots;

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState(0);
  const [withChildren, setWithChildren] = useState(true);


  const { id: questId } = useParams();
  const body = {
    date,
    time,
    contactPerson,
    phone,
    withChildren,
    peopleCount,
    placeId
  };


  function handleSlotChange(event: ChangeEvent<HTMLInputElement>) {
    setDate(String(event.target.dataset.date));
    setTime(event.target.value);
  }
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setContactPerson(event.target.value);
  }
  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value);
  }
  function handlePeopleCountChange(event: ChangeEvent<HTMLInputElement>) {
    setPeopleCount(Number(event.target.value));
  }
  function handleHasChildrenChange(event: ChangeEvent<HTMLInputElement>) {
    setWithChildren(event.target.checked);
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (questId) {
      dispatch(sendBookingData({ questId, body }));
    }
  }

  useEffect(() => {
    setTime('');
  }, [placeId]);

  useEffect(() => {
    switch (sendingStatus) {
      case LoadingDataStatus.Success:
        setDate('');
        setTime('');
        setContactPerson('');
        setPhone('');
        setPeopleCount(0);
        setWithChildren(false);

        navigate(AppRoute.MyQuests);
        break;
      case LoadingDataStatus.Error:
        dispatch(setError('Данные не отправлены, попробуйте снова'));
        dispatch(clearErrorAction());
    }

  }, [sendingStatus, dispatch, navigate]);


  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {todaySlots.map((item) => (
              <label key={window.crypto.randomUUID()} className="custom-radio booking-form__date">
                <input
                  type="radio"
                  id={`today${convertTime(item.time)}`}
                  value={item.time}
                  data-date='today'
                  name="date"
                  required
                  checked={(item.time === time) && (date === 'today')}
                  disabled={!item.isAvailable}
                  onChange={handleSlotChange}
                />

                <span
                  className="custom-radio__label"
                >
                  {item.time}
                </span>
              </label>
            ))}

          </div>

        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {tomorrowSlots.map((item) => (
              <label key={window.crypto.randomUUID()} className="custom-radio booking-form__date">
                <input
                  type="radio"
                  id={`tomorrow${convertTime(item.time)}`}
                  value={item.time}
                  data-date='tomorrow'
                  name="date"
                  required
                  checked={(item.time === time) && (date === 'tomorrow')}
                  disabled={!item.isAvailable}
                  onChange={handleSlotChange}
                />
                <span className="custom-radio__label">{item.time}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </fieldset>

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            required
            pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
            onChange={handleNameChange}
          />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="Телефон"
            required
            pattern="[0-9]{10,}"
            onChange={handlePhoneChange}
          />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input
            type="number"
            id="person"
            name="person"
            placeholder="Количество участников"
            required
            onChange={handlePeopleCountChange}
          />
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            name="children"
            defaultChecked
            onChange={handleHasChildrenChange}
          />
          <span className="custom-checkbox__icon" >
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input
          type="checkbox"
          id="id-order-agreement"
          name="user-agreement"
          required
        />
        <span className="custom-checkbox__icon" >
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export { BookingForm };
