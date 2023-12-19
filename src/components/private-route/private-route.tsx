import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthStatus;
  redirectTo?: AppRoute;
}

function PrivateRoute({ children, authStatus, redirectTo = AppRoute.Login }: PrivateRouteProps): JSX.Element {

  if (authStatus === AuthStatus.NoAuth) {
    return <Navigate to={redirectTo} />;
  }
  return children;

}

export { PrivateRoute };
