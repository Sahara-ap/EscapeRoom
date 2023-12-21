import { NameSpace } from '../../consts';
import { State } from '../../types/store';

const getError = (state: State) => state[NameSpace.App].error;

export {
  getError,
};
