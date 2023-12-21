import { AuthStatus, NameSpace } from '../../consts';
import { State } from '../../types/store';

const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;

export {
  getAuthStatus,
};
