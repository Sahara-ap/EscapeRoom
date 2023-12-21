import { createSlice } from '@reduxjs/toolkit';

import { selectedCard } from '../../mocks/selectedCard';
import { NameSpace } from '../../consts';
import { fetchQuestsAction } from '../api-actions';

import { TSelectedCard } from '../../types/types';
import { TCard } from '../../types/types';

type TCardsDataState = {
  cards: TCard[];
  selectedCard: TSelectedCard | null;
}

const initialState: TCardsDataState = {
  cards: [],
  selectedCard: selectedCard,
};

const cardsDataSlice = createSlice({
  name: NameSpace.Cards,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.cards = action.payload;
      });
  }
});


export {
  cardsDataSlice,
};
