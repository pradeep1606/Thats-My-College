import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api = process.env.API_URL;

export const fetchTopCollege = createAsyncThunk("TopCollege/fetchTopCollege", async (apiPost) => {
    try {
        const response = await axios.get(`${Api}${apiPost}`);
        return response.data;
    } catch (error) {
        throw error;
    }
});


export const TopClgSlice = createSlice({
    name: 'topCollege',
    initialState: {
        college: [],
        loading: true,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopCollege.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopCollege.fulfilled, (state, action) => {
                state.loading = false;
                state.college = action.payload;
            })
            .addCase(fetchTopCollege.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});