import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { TMyReservedQuests } from '../../types/types';
import { fetchMyQuestsAction } from '../api-actions';

type TMyQuestsSlice = {
  myQuests: TMyReservedQuests[];
  isMyQuestsLoading: boolean;
}

const initialState: TMyQuestsSlice = {
  myQuests: [],
  isMyQuestsLoading: false,
};

const myQuestsSlice = createSlice({
  name: NameSpace.MyQuests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMyQuestsAction.pending, (state) => {
        state.isMyQuestsLoading = true;
      })
      .addCase(fetchMyQuestsAction.fulfilled, (state, action) => {
        state.myQuests = action.payload;
        state.isMyQuestsLoading = false;
      })
      .addCase(fetchMyQuestsAction.rejected, (state) => {
        state.isMyQuestsLoading = false;
      });
  }
});

export {
  myQuestsSlice,
};
