import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/user-slice';
import { cardsDataSlice } from './cards/cards-slice';
import { NameSpace } from '../consts';
import { appSlice } from './app/app-slice';

const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Cards]: cardsDataSlice.reducer,
  [NameSpace.App]: appSlice.reducer,
});

export {rootReducer};
