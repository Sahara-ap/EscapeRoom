import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../consts';
import { checkAuthStatusAction, loginAction, logoutAction } from '../api-actions';

type TUserState = {
  authStatus: AuthStatus;
}

const initialState: TUserState = {
  authStatus: AuthStatus.Unknown,
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
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })

      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      });

  }
});

export {
  userSlice,
};
