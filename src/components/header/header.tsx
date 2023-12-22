import { Link } from 'react-router-dom';
import cn from 'classnames';

import { AppRoute, AuthStatus } from '../../consts';
import { Logo } from '../logo/logo';
import { useAppSelector } from '../../hooks/store-hooks';
import { getAuthStatus } from '../../store/user/user-selectors';

type THeaderProps = {
  page: AppRoute;
  isExtendedNav?: boolean;
}
function Header({ page, isExtendedNav }: THeaderProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={cn(
                'link',
                {
                  'active': (page === AppRoute.Main) || (page === AppRoute.Quest) || (page === AppRoute.Login) || (page === AppRoute.Booking),
                  'not-disabled': (page !== AppRoute.Main),
                })} to={AppRoute.Main}
              >Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={cn('link', { 'active': (page === AppRoute.Contacts) })}
                to={AppRoute.Contacts}
              >Контакты
              </Link>
            </li>
            {isExtendedNav && isAuth &&
              <li className="main-nav__item">
                <Link
                  className={cn(
                    'link',
                    {
                      'active': page === AppRoute.MyQuests
                    })}
                  to={AppRoute.MyQuests}
                >
                  Мои бронирования
                </Link>
              </li>}
          </ul>
        </nav>

        <div className="header__side-nav">
          {
            page !== AppRoute.Login && (
              !isAuth
                ? <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
                : <Link className="btn btn--accent header__side-item" to="#">Выйти</Link>
            )
          }
          <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
        </div>
      </div>
    </header>
  );
}

export { Header };
