import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute } from '../consts';

import { setError } from './app/app-slice';

import { ThunkAPI } from '../types/store';
import { TCard } from '../types/types';

const TIMEOUT_SHOW_ERROR = 2000;

const clearErrorAction = createAsyncThunk(
  'app/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  });

const fetchQuestsAction = createAsyncThunk<TCard[], undefined, ThunkAPI>(
  'cards/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TCard[]>(APIRoute.Quests);
    return data;
  }
);

export {
  clearErrorAction,
  fetchQuestsAction,
};
