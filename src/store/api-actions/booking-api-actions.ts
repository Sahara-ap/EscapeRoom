import { createAsyncThunk } from '@reduxjs/toolkit';
import { TBookingData } from '../../types/types';
import { ThunkAPI } from '../../types/store';
import { APIRoute } from '../../consts';

const fetchBookingData = createAsyncThunk<TBookingData[], string, ThunkAPI>(
  'booking/fetchData',
  async (questId, {extra: api}) => {
    const {data} = await api.get<TBookingData[]>(`${APIRoute.Quests}/${questId}/booking`);
    return data;
  }
);

export {
  fetchBookingData,
};
