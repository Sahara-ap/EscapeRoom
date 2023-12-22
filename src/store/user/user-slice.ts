import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, LoadingDataStatus, NameSpace } from '../../consts';
import { checkAuthStatusAction, loginAction, logoutAction } from '../api-actions';

type TUserState = {
  authStatus: AuthStatus;
  sendingLoginStatus: LoadingDataStatus;
}

const initialState: TUserState = {
  authStatus: AuthStatus.Unknown,
  sendingLoginStatus: LoadingDataStatus.Unsent
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthStatusAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthStatusAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })

      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
        state.sendingLoginStatus = LoadingDataStatus.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.sendingLoginStatus = LoadingDataStatus.Error;
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      });

  }
});

export {
  userSlice,
};
