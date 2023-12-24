import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { TBookingData, TBookingQuestResponseInfo } from '../../types/types';
import { sendBookingData } from '../api-actions/booking-api-actions';

type TBookingFormSlice = {
  bookingResponse: TBookingQuestResponseInfo | null;
  isBookingSending: boolean;
  placeId: TBookingData['id'];
}
const initialState: TBookingFormSlice = {
  bookingResponse: null,
  isBookingSending: false,
  placeId: '',
};

const bookingFormSlice = createSlice({
  name: NameSpace.BookingForm,
  initialState,
  reducers: {
    setPlaceId: (state, action: PayloadAction<TBookingData['id']>) => {
      state.placeId = action.payload;
    }
  },
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

const {setPlaceId} = bookingFormSlice.actions;

export {
  bookingFormSlice,
  setPlaceId,
};
