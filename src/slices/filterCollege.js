// filterCollege.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Api = 'https://thats-my-college.onrender.com/api/courses/get-all/college-details';


export const fetchColleges = createAsyncThunk('filterCollege/fetchColleges', async () => {
  try {
    const response = await axios.get(Api);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const filterCollegeSlice = createSlice({
  name: 'filterCollege',
  initialState: {
    colleges: [], 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColleges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchColleges.fulfilled, (state, action) => {
        state.loading = false;
        state.colleges = action.payload;
      })
      .addCase(fetchColleges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default filterCollegeSlice.reducer;
