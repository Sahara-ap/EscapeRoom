import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { getBookingSendingStatus } from '../../store/booking-form/booking-form-selectors';
import { sendBookingData } from '../../store/api-actions/booking-api-actions';
import { setError } from '../../store/app/app-slice';
import { clearErrorAction } from '../../store/api-actions/api-actions';

import { convertTime } from '../../utils';
import { AppRoute, LoadingDataStatus } from '../../consts';

import { TBookingData, TSelectedCard } from '../../types/types';
import { setBookingSendingStatus } from '../../store/booking-form/booking-form-slice';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
  date: string;
  time: string;
  name: string;
  phone: string;
  contactPerson: string;
  withChildren: boolean;
  peopleCount: number;
  'user-agreement': string;

}

type TBookingFormProps = {
  questLocations: TBookingData[];
  selectedQuest: TSelectedCard;
  placeId: TBookingData['id'];
}

function BookingForm({ questLocations, selectedQuest, placeId }: TBookingFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const sendingStatus = useAppSelector(getBookingSendingStatus);

  const defaultTodaySlots = questLocations.map((item) => item.slots.today)[0];
  const todaySlots = questLocations.find((questLocation) => questLocation.id === placeId)?.slots.today ?? defaultTodaySlots;

  const defaultTomorrowSlots = questLocations.map((item) => item.slots.today)[0];
  const tomorrowSlots = questLocations.find((questLocation) => questLocation.id === placeId)?.slots.tomorrow ?? defaultTomorrowSlots;

  const [date, setDate] = useState('');

  function handleSlotChange(event: ChangeEvent<HTMLInputElement>) {
    setDate(String(event.target.dataset.date));
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
    resetField,
  } = useForm<FormInputs>({
    mode: 'onBlur'
  });

  useEffect(() => {
    switch (sendingStatus) {
      case LoadingDataStatus.Success:
        dispatch(setBookingSendingStatus(LoadingDataStatus.Unsent));
        reset();
        navigate(AppRoute.MyQuests);
        break;
      case LoadingDataStatus.Error:
        dispatch(setError('Данные не отправлены, попробуйте снова'));
        dispatch(clearErrorAction());
        dispatch(setBookingSendingStatus(LoadingDataStatus.Unsent));

    }
  }, [sendingStatus, dispatch, navigate, reset]);

  const { id: questId } = useParams();
  const submit: SubmitHandler<FormInputs> = (formData, event) => {
    event?.preventDefault();

    const body = {
      date,
      time: formData.time,
      contactPerson: formData.contactPerson,
      phone: formData.phone,
      withChildren: formData.withChildren,
      peopleCount: formData.peopleCount,
      placeId
    };
    if (questId) {
      dispatch(sendBookingData({ questId, body }));
    }
  };

  const [minPersons, maxPersons] = selectedQuest.peopleMinMax;


  useEffect(() => {
    resetField('time');
  }, [placeId, resetField]);

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      onSubmit={(event) => void handleSubmit(submit)(event)}

    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {todaySlots.map((item) => (
              <label key={item.time} className="custom-radio booking-form__date">
                <input
                  {...register('time', { required: 'Выберите время' })}
                  type="radio"
                  id={`today${convertTime(item.time)}`}
                  value={item.time}
                  data-date='today'
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
              <label key={item.time} className="custom-radio booking-form__date">
                <input
                  {...register('time', { required: 'Выберите время' })}
                  type="radio"
                  id={`tomorrow${convertTime(item.time)}`}
                  value={item.time}
                  data-date='tomorrow'
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
            {...register('contactPerson', {
              required: 'Необходимо заполнить',
              pattern: {
                value: /[А-Яа-яЁёA-Za-z'\- ]{1,}/,
                message: 'только буквы тире и пробелы'
              }
            })
            }
            type="text"
            id="name"
            placeholder="Имя"
          />
          {errors.contactPerson ? <p style={{ color: 'aqua' }}>{errors.contactPerson.message}</p> : null}
        </div>

        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input
            {...register('phone', {
              required: 'Необходимо заполнить в формате 89000000000',
              pattern: {
                value: /[0-9]{10,}/,
                message: 'только цифры не меньше десяти'
              }
            })}
            type="tel"
            id="tel"
            placeholder="Телефон"
          />
          {errors.phone ? <p style={{ color: 'aqua' }}>{errors.phone.message}</p> : null}
        </div>

        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input
            {...register('peopleCount', {
              required: `Количество участников должно быть от ${minPersons} до ${maxPersons}`,
              min: {
                value: minPersons,
                message: `Количество участников должно быть от ${minPersons} до ${maxPersons}`
              },
              max: {
                value: maxPersons,
                message: `Количество участников должно быть от ${minPersons} до ${maxPersons}`
              },
              valueAsNumber: true
            })}
            type="number"
            id="person"
            placeholder={`Количество участников от ${minPersons} до ${maxPersons}`}
          />
          {errors.peopleCount ? <p style={{ color: 'aqua' }}>{errors.peopleCount.message}</p> : null}
        </div>

        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            {...register('withChildren')}
            type="checkbox"
            id="children"
            defaultChecked
          />
          <span className="custom-checkbox__icon" >
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>

      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
        disabled={isSubmitting || !isValid}
      >
        Забронировать
      </button>

      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input
          {...register('user-agreement', { required: 'Обязательное поле' })}
          type="checkbox"
          id="id-order-agreement"
          name="user-agreement"
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
      {errors['user-agreement'] ? <p style={{ color: 'aqua' }}>{errors['user-agreement'].message}</p> : null}
    </form>
  );
}

export { BookingForm };
