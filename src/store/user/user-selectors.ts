import { AuthStatus, LoadingDataStatus, NameSpace } from '../../consts';
import { State } from '../../types/store';

const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
const getSendingLoginStatus = (state: State): LoadingDataStatus => state[NameSpace.User].sendingLoginStatus;

export {
  getAuthStatus,
  getSendingLoginStatus,
};
