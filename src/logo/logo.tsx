import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../consts';

function Label(): JSX.Element {
  return (
    <svg width="134" height="52" aria-hidden="true">
      <use xlinkHref="#logo"></use>
    </svg>
  );
}

function Logo(): JSX.Element {
  const { pathname } = useLocation();
  const isMain = pathname === AppRoute.Main;

  return (
    <>
      {isMain &&
        <span className="logo header__logo">
          <Label />
        </span>}

      {!isMain &&
        <Link className="logo header__logo" to={AppRoute.Main} aria-label="Перейти на Главную">
          <Label />
        </Link>}
    </>
  );
}

export { Logo };
