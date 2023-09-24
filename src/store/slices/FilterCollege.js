import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api = "https://thats-my-college.onrender.com/api/courses/get-all/college-details";

export const fetchApi = createAsyncThunk("FilterCollege/fetchColleges", async () => {
  try {
    const response = await axios.get(Api);
    return response.data; 
  } catch (error) {
    throw error;
  }
});

export const FilterCollege = createSlice({
  name: "FilterCollege",
  initialState: [],
  reducers: {
    fetchColleges:(state, action)=>{  
        // console.log("clicked");
        state = action.payload;
    }
  }
});

export const {fetchColleges} = FilterCollege.actions

