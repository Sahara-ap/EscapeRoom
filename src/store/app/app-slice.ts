import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { fetchMyQuestsAction, fetchQuestsAction, fetchSelectedQuestAction } from '../api-actions/api-actions';
import { fetchBookingData } from '../api-actions/booking-api-actions';

type TAppState = {
  error: null | string;
  hasError: boolean;
}

const initialState: TAppState = {
  error: null,
  hasError: false,
};

const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<null | string>) => {
      state.error = action.payload;
    },

  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state) => {
        state.hasError = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.hasError = true;
      })


      .addCase(fetchSelectedQuestAction.fulfilled, (state) => {
        state.hasError = false;
      })
      .addCase(fetchSelectedQuestAction.rejected, (state) => {
        state.hasError = true;
      })


      .addCase(fetchMyQuestsAction.fulfilled, (state) => {
        state.hasError = false;
      })
      .addCase(fetchMyQuestsAction.rejected, (state) => {
        state.hasError = true;
      })


      .addCase(fetchBookingData.fulfilled, (state) => {
        state.hasError = false;
      })
      .addCase(fetchBookingData.rejected, (state) => {
        state.hasError = true;
      });
  }
});

const { setError } = appSlice.actions;

export {
  appSlice,

  setError,
};
