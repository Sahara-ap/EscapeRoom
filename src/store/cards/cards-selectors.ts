import { NameSpace } from '../../consts';
import { State } from '../../types/store';
import { TCard, TSelectedCard } from '../../types/types';

const getCards = (state: State): TCard[] => state[NameSpace.Cards].cards;
const getSelectedCard = (state: State): TSelectedCard | null => state[NameSpace.Cards].selectedCard;
const isQuestsLoading = (state: State): boolean => state[NameSpace.Cards].isQuestsLoading;
const getQuestId = (state: State): TCard['id'] => state[NameSpace.Cards].questId;

export {
  getCards,
  getSelectedCard,
  isQuestsLoading,
  getQuestId,
};
