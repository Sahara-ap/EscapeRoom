import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../consts';
import { fetchQuestsAction, fetchSelectedQuestAction } from '../api-actions';

import { TSelectedCard } from '../../types/types';
import { TCard } from '../../types/types';

type TCardsDataState = {
  cards: TCard[];
  selectedCard: TSelectedCard | null;
  hasError: boolean;
  isQuestsLoading: boolean;
}

const initialState: TCardsDataState = {
  cards: [],
  selectedCard: null,
  hasError: false,
  isQuestsLoading: false,
};

const cardsDataSlice = createSlice({
  name: NameSpace.Cards,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.isQuestsLoading = false;
        state.hasError = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isQuestsLoading = false;
        state.hasError = true;
      })
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsLoading = true;
      })

      .addCase(fetchSelectedQuestAction.fulfilled, (state, action) => {
        state.selectedCard = action.payload;
      });
  }
});


export {
  cardsDataSlice,
};
