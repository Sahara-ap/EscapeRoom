import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../consts';
import { checkAuthStatusAction } from '../api-actions';

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
      });
  }
});

export {
  userSlice,
};
