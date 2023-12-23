import { NameSpace } from '../../consts';
import { State } from '../../types/store';

const getBookingResponse = (state: State) => state[NameSpace.BookingForm].bookingResponse;
const isBookingSending = (state: State) => state[NameSpace.BookingForm].isBookingSending;

export {
  getBookingResponse,
  isBookingSending,
};
