import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute } from '../consts';

import { setError } from './app/app-slice';

import { ThunkAPI } from '../types/store';
import { TCard, TSelectedCard } from '../types/types';
import { TUserData } from '../types/user';

const TIMEOUT_SHOW_ERROR = 3000;

const clearErrorAction = createAsyncThunk(
  'app/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  });

const fetchQuestsAction = createAsyncThunk<TCard[], undefined, ThunkAPI>(
  'cards/fetchCrads',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TCard[]>(APIRoute.Quests);
    return data;
  }
);

const fetchSelectedQuestAction = createAsyncThunk<TSelectedCard, string, ThunkAPI>(
  'cards/fetchSelectedCard',
  async(cardId, {extra: api}) => {
    const {data} = await api.get<TSelectedCard>(`${APIRoute.Quests}/${cardId}`);
    return data;
  }
);

const checkAuthStatusAction = createAsyncThunk<TUserData, undefined, ThunkAPI>(
  'user/checkAuthStatus',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUserData>(APIRoute.Login);
    return data;
  });


export {
  clearErrorAction,
  fetchQuestsAction,
  fetchSelectedQuestAction,
  checkAuthStatusAction,
};
