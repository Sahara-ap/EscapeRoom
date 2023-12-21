import { NameSpace } from '../../consts';
import { State } from '../../types/store';
import { TCard, TSelectedCard } from '../../types/types';

const getCards = (state: State): TCard[] => state[NameSpace.Cards].cards;
const getSelectedCard = (state: State): TSelectedCard | null => state[NameSpace.Cards].selectedCard;

export {
  getCards,
  getSelectedCard,
};
