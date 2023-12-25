import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoadingDataStatus, NameSpace } from '../../consts';
import { TBookingData, TBookingQuestResponseInfo } from '../../types/types';
import { sendBookingData } from '../api-actions/booking-api-actions';

type TBookingFormSlice = {
  bookingResponse: TBookingQuestResponseInfo | null;
  bookingSendingStatus: LoadingDataStatus;
  placeId: TBookingData['id'];
}
const initialState: TBookingFormSlice = {
  bookingResponse: null,
  bookingSendingStatus: LoadingDataStatus.Unsent,
  placeId: '',
};

const bookingFormSlice = createSlice({
  name: NameSpace.BookingForm,
  initialState,
  reducers: {
    setPlaceId: (state, action: PayloadAction<TBookingData['id']>) => {
      state.placeId = action.payload;
    },
    setBookingSendingStatus: (state, action: PayloadAction<LoadingDataStatus>) => {
      state.bookingSendingStatus = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(sendBookingData.pending, (state) => {
        state.bookingSendingStatus = LoadingDataStatus.Pending;
      })
      .addCase(sendBookingData.fulfilled, (state, action) => {
        state.bookingResponse = action.payload;
        state.bookingSendingStatus = LoadingDataStatus.Success;
      })
      .addCase(sendBookingData.rejected, (state) => {
        state.bookingSendingStatus = LoadingDataStatus.Error;
      });
  }
});

const {setPlaceId, setBookingSendingStatus} = bookingFormSlice.actions;

export {
  bookingFormSlice,
  setPlaceId,
  setBookingSendingStatus,
};
