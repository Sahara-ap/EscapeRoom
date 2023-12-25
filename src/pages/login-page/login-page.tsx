import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { loginAction } from '../../store/api-actions/api-actions';
import { getAuthStatus, getSendingLoginStatus } from '../../store/user/user-selectors';
import { getQuestId } from '../../store/cards/cards-selectors';

import { Header } from '../../components/header/header';
import { AppRoute, AuthStatus, LoadingDataStatus } from '../../consts';

const MIN_PASSWORD_LENGTH = 3;
const MAX_PASSWORD_LENGTH = 15;

function LoginPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const sendingLoginStatus = useAppSelector(getSendingLoginStatus);
  const questId = useAppSelector(getQuestId);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const patternPassword = /([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+)/;
  const isPatternPassword = patternPassword.test(password);

  const patternMail = /[^|\w](\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/;
  const isPatternMail = patternMail.test(email);

  const isValid = (password.length >= MIN_PASSWORD_LENGTH)
    && (password.length <= MAX_PASSWORD_LENGTH)
    && (email)
    && (checkboxStatus)
    && isPatternPassword
    && isPatternMail;


  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const authData = {
      email: email,
      password: password
    };
    dispatch(loginAction(authData));
  }

  useEffect(() => {
    if (sendingLoginStatus === LoadingDataStatus.Success) {
      setEmail('');
      setPassword('');
      setCheckboxStatus(false);
    }
  }, [sendingLoginStatus]);

  function onEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleCheckboxChange() {
    setCheckboxStatus((prevStatus) => !prevStatus);
  }


  if (authStatus === AuthStatus.Auth && (!questId)) {
    return <Navigate to={AppRoute.Main} />;
  }

  if ((authStatus === AuthStatus.Auth) && (questId)) {
    return <Navigate to={`${AppRoute.Booking}/${questId}`} />;
  }

  return (
    <>
      <Helmet>
        <title>{'Авторизация - Escape Room'}</title>
      </Helmet>
      <Header page={AppRoute.Login} />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              className="login-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                    <input
                      value={email}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      onChange={onEmailChange}
                      required
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input
                      value={password}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль"
                      pattern="([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+)"
                      minLength={MIN_PASSWORD_LENGTH}
                      maxLength={MAX_PASSWORD_LENGTH}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                </div>
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                  disabled={!isValid}
                >
                  Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input
                  checked={checkboxStatus}
                  type="checkbox"
                  id="id-order-agreement"
                  name="user-agreement"
                  onChange={handleCheckboxChange}
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
          </div>
        </div>
      </main>
    </>
  );
}

export { LoginPage };
