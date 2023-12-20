import { State } from '../../types/store';
import { TCard, TSelectedCard } from '../../types/types';

const getCards = (state: State): TCard[] => state.CARDS.cards;
const getSelectedCard = (state: State): TSelectedCard | null => state.CARDS.selectedCard;

export {
  getCards,
  getSelectedCard,
};
