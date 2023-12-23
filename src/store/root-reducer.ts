import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/user-slice';
import { cardsDataSlice } from './cards/cards-slice';
import { NameSpace } from '../consts';
import { appSlice } from './app/app-slice';
import { myQuestsSlice } from './mycards/mycards-slice';

const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Cards]: cardsDataSlice.reducer,
  [NameSpace.MyQuests]: myQuestsSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export {rootReducer};
