import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/user-slice';
import { cardsDataSlice } from './cards/cards-slice';

const rootReducer = combineReducers({
  USER: userSlice.reducer,
  CARDS: cardsDataSlice.reducer,
});

export {rootReducer};
