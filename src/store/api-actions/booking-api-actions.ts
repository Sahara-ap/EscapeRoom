import { createAsyncThunk } from '@reduxjs/toolkit';
import { TBookingData, TBookingQuestResponseInfo, TPostArgument } from '../../types/types';
import { ThunkAPI } from '../../types/store';
import { APIRoute } from '../../consts';

const fetchBookingData = createAsyncThunk<TBookingData[], string, ThunkAPI>(
  'booking/fetchData',
  async (questId, {extra: api}) => {
    const {data} = await api.get<TBookingData[]>(`${APIRoute.Quests}/${questId}/booking`);
    return data;
  }
);

const sendBookingData = createAsyncThunk<TBookingQuestResponseInfo, TPostArgument, ThunkAPI>(
  'booking/sendData',
  async ({questId, body}, {extra: api}) => {
    const {data} = await api.post<TBookingQuestResponseInfo>(`${APIRoute.Quests}/${questId}/booking`, body);
    return data;
  }
);

export {
  fetchBookingData,
  sendBookingData,
};
