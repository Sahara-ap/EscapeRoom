import { NameSpace } from '../../consts';
import { State } from '../../types/store';

const getBookingResponse = (state: State) => state[NameSpace.BookingForm].bookingResponse;
const getPlaceId = (state: State) => state[NameSpace.BookingForm].placeId;
const getCoords = (state: State) => state[NameSpace.BookingForm].coords;
const getBookingSendingStatus = (state: State) => state[NameSpace.BookingForm].bookingSendingStatus;

export {
  getBookingResponse,
  getPlaceId,
  getCoords,
  getBookingSendingStatus,
};
