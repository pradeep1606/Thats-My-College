
import { configureStore } from '@reduxjs/toolkit';
import filterCollegeSlice from '../slices/filterCollege';

const store = configureStore({
  reducer: {
    filterCollege: filterCollegeSlice,
  },
});

export default store;
