import { NameSpace } from '../../consts';
import { State } from '../../types/store';
import { TMyReservedQuests } from '../../types/types';

const getMyQuests = (state: State): TMyReservedQuests[] => state[NameSpace.MyQuests].myQuests;
const isMyQuestsLoading = (state: State) => state[NameSpace.MyQuests].isMyQuestsLoading;

export {
  getMyQuests,
  isMyQuestsLoading,
};
