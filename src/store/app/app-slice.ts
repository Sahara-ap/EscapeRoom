import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { State } from '../../types/store';

type TAppState = {
  error: null | string;
}

const initialState: TAppState = {
  error: null
};

const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<null | string>) => {
      state.error = action.payload;
    }
  }
});

const {setError} = appSlice.actions;

export {
  appSlice,

  setError
};
