import { Link, Navigate } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { AppRoute, AuthStatus } from '../../consts';
import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { loginAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user/user-selectors';

function LoginPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (emailRef.current && passwordRef.current) {
      const authData = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      };
      dispatch(loginAction(authData));
    }

  }


  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <>
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
                      ref={emailRef}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      required
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input
                      ref={passwordRef}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль"
                      required
                    />
                  </div>
                </div>
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                >
                  Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
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
          </div>
        </div>
      </main>
    </>
  );
}

export { LoginPage };
