import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { TBookingData } from '../../types/types';
import { fetchBookingData } from '../api-actions/booking-api-actions';

type TBookingDataSlice = {
  bookingData: TBookingData[];
  isBookingDataLoading: boolean;
}
const initialState: TBookingDataSlice = {
  bookingData: [],
  isBookingDataLoading: false
};

const bookingDataSlice = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookingData.pending, (state) => {
        state.isBookingDataLoading = true;
      })
      .addCase(fetchBookingData.fulfilled, (state, action) => {
        state.bookingData = action.payload;
        state.isBookingDataLoading = false;
      })
      .addCase(fetchBookingData.rejected, (state) => {
        state.isBookingDataLoading = false;
      });
  }
});

export {
  bookingDataSlice,
};
