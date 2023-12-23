import { NameSpace } from '../../consts';
import { State } from '../../types/store';

const getBookingData = (state: State) => state[NameSpace.Booking].bookingData;
const isBookingDataLoading = (state: State) => state[NameSpace.Booking].isBookingDataLoading;

export {
  getBookingData,
  isBookingDataLoading,
};
