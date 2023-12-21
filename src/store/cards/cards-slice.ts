import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../consts';
import { fetchQuestsAction, fetchSelectedQuestAction } from '../api-actions';

import { TSelectedCard } from '../../types/types';
import { TCard } from '../../types/types';

type TCardsDataState = {
  cards: TCard[];
  selectedCard: TSelectedCard | null;
}

const initialState: TCardsDataState = {
  cards: [],
  selectedCard: null,
};

const cardsDataSlice = createSlice({
  name: NameSpace.Cards,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(fetchSelectedQuestAction.fulfilled, (state, action) => {
        state.selectedCard = action.payload;
      });
  }
});


export {
  cardsDataSlice,
};
