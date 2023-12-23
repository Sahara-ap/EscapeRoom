import { NameSpace } from '../../consts';
import { State } from '../../types/store';

const getError = (state: State) => state[NameSpace.App].error;
const getHasError = (state: State) => state[NameSpace.App].hasError;

export {
  getError,
  getHasError,
};
