import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../types/store';
import { setError } from './app/app-slice';

const TIMEOUT_SHOW_ERROR = 2000;

const clearErrorAction = createAsyncThunk(
  'app/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  });

export {
  clearErrorAction,
};
