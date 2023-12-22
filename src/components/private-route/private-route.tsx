import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../consts';
import { useAppSelector } from '../../hooks/store-hooks';
import { getAuthStatus } from '../../store/user/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
  redirectTo: AppRoute;
}

function PrivateRoute({ children, redirectTo }: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthStatus.NoAuth) {
    return <Navigate to={redirectTo} />;
  }
  return children;

}

export { PrivateRoute };
