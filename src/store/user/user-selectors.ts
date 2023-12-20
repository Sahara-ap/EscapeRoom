import { AuthStatus } from '../../consts';
import { State } from '../../types/store';

const getAuthStatus = (state: State): AuthStatus => state.USER.authStatus;

export {
  getAuthStatus,
};
