import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../consts';
import { fetchQuestsAction, fetchSelectedQuestAction } from '../api-actions/api-actions';

import { TSelectedCard } from '../../types/types';
import { TCard } from '../../types/types';

type TCardsDataState = {
  cards: TCard[];
  selectedCard: TSelectedCard | null;
  isQuestsLoading: boolean;
}

const initialState: TCardsDataState = {
  cards: [],
  selectedCard: null,
  isQuestsLoading: true,
};

const cardsDataSlice = createSlice({
  name: NameSpace.Cards,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsLoading = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.isQuestsLoading = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isQuestsLoading = false;
      })

      .addCase(fetchSelectedQuestAction.pending, (state) => {
        state.isQuestsLoading = true;
      })
      .addCase(fetchSelectedQuestAction.fulfilled, (state, action) => {
        state.selectedCard = action.payload;
        state.isQuestsLoading = false;
      })
      .addCase(fetchSelectedQuestAction.rejected, (state) => {
        state.isQuestsLoading = false;
      });

  }
});

export {
  cardsDataSlice,
};
