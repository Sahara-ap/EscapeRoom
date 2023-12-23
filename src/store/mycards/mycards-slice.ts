import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { TMyReservedQuest } from '../../types/types';
import { dropMyQuestAction, fetchMyQuestsAction } from '../api-actions/api-actions';

type TMyQuestsSlice = {
  myQuests: TMyReservedQuest[];
  isMyQuestsLoading: boolean;
  isMyQuestDeleting: boolean;
}

const initialState: TMyQuestsSlice = {
  myQuests: [],
  isMyQuestsLoading: false,
  isMyQuestDeleting: false
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
      })

      .addCase(dropMyQuestAction.pending, (state) => {
        state.isMyQuestDeleting = true;
      })
      .addCase(dropMyQuestAction.fulfilled, (state) => {
        state.isMyQuestDeleting = false;
      })
      .addCase(dropMyQuestAction.rejected, (state) => {
        state.isMyQuestDeleting = false;
      });
  }
});

export {
  myQuestsSlice,
};
