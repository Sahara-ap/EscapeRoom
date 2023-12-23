import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../consts';

import { appSlice } from './app/app-slice';
import { bookingDataSlice } from './booking/booking-data-slice';
import { cardsDataSlice } from './cards/cards-slice';
import { myQuestsSlice } from './mycards/mycards-slice';
import { userSlice } from './user/user-slice';

const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Booking]: bookingDataSlice.reducer,
  [NameSpace.Cards]: cardsDataSlice.reducer,
  [NameSpace.MyQuests]: myQuestsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export {rootReducer};
