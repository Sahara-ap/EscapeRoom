import { NameSpace } from '../../consts';
import { State } from '../../types/store';
import { TMyReservedQuest } from '../../types/types';

const getMyQuests = (state: State): TMyReservedQuest[] => state[NameSpace.MyQuests].myQuests;
const isMyQuestsLoading = (state: State) => state[NameSpace.MyQuests].isMyQuestsLoading;
const isMyQuestsDeleting = (state: State) => state[NameSpace.MyQuests].isMyQuestDeleting;

export {
  getMyQuests,
  isMyQuestsLoading,
  isMyQuestsDeleting,
};
