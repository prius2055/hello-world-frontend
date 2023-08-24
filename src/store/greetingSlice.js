import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreeting = createAsyncThunk('get/greeting', async () => {
  const greeting = await axios.get('http://[::1]:3000/api/v1/greetings');
  return greeting.data;
});

const initialState = {
  message: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getGreeting.fulfilled, (state, { payload }) => {
      state.message = payload.message;
    });
  },
});

export default greetingSlice.reducer;
