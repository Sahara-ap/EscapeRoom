import { NameSpace } from '../../consts';
import { State } from '../../types/store';
import { TCard, TSelectedCard } from '../../types/types';

const getCards = (state: State): TCard[] => state[NameSpace.Cards].cards;
const getSelectedCard = (state: State): TSelectedCard | null => state[NameSpace.Cards].selectedCard;
const getHasError = (state: State): boolean => state[NameSpace.Cards].hasError;
const isQuestsLoading = (state: State): boolean => state[NameSpace.Cards].isQuestsLoading;

export {
  getCards,
  getSelectedCard,
  getHasError,
  isQuestsLoading,
};
