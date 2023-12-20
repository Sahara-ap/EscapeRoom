import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus } from '../../consts';

type TUserState = {
  authStatus: AuthStatus;
}

const initialState: TUserState = {
  authStatus: AuthStatus.Unknown,
};

const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.authStatus = action.payload;
    }
  },
  extraReducers(builder) {}
});

const {setAuthStatus} = userSlice.actions;

export {
  userSlice,

  setAuthStatus,
};
