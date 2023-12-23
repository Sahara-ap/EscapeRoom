import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { TBookingQuestResponseInfo } from '../../types/types';
import { sendBookingData } from '../api-actions/booking-api-actions';

type TBookingFormSlice = {
  bookingResponse: TBookingQuestResponseInfo | null;
  isBookingSending: boolean;
}
const initialState: TBookingFormSlice = {
  bookingResponse: null,
  isBookingSending: false
};

const bookingFormSlice = createSlice({
  name: NameSpace.BookingForm,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(sendBookingData.pending, (state) => {
        state.isBookingSending = true;
      })
      .addCase(sendBookingData.fulfilled, (state, action) => {
        state.bookingResponse = action.payload;
        state.isBookingSending = false;
      })
      .addCase(sendBookingData.rejected, (state) => {
        state.isBookingSending = false;
      });
  }
});

export {
  bookingFormSlice,
};
