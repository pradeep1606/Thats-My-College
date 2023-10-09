import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api = process.env.API_URL;

export const fetchSearchCollege = createAsyncThunk("SearchCollege/searchCollege", async (apiPost) => {
    try {
        const response = await axios.get(`${Api}${apiPost}`);
        return response.data;
    } catch (error) {
        throw error;
    }
});


export const SearchCollege = createSlice({
    name: 'searchCollege',
    initialState: {
        colleges: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchCollege.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearchCollege.fulfilled, (state, action) => {
                state.loading = false;
                state.colleges = action.payload;
            })
            .addCase(fetchSearchCollege.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});