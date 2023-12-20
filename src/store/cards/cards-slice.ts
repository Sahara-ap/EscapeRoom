import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCard } from '../../types/types';
import { TSelectedCard } from '../../types/types';
import { cardList } from '../../mocks/card-list';
import { selectedCard } from '../../mocks/selectedCard';

type TCardsDataState = {
  cards: TCard[];
  selectedCard: TSelectedCard | null;
}

const initialState: TCardsDataState = {
  cards: cardList,
  selectedCard: selectedCard,
};

const cardsDataSlice = createSlice({
  name: 'CARDS',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<TCard[]>) => {
      state.cards = action.payload;
    }
  }
});

const {setCards} = cardsDataSlice.actions;

export {
  cardsDataSlice,

  setCards,
};
