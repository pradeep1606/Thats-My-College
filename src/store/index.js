import { configureStore } from "@reduxjs/toolkit";
import { FilterCollege } from "./slices/FilterCollege";

const store = configureStore({
    reducer:{
        allCollege:FilterCollege.reducer,
    }
});

export default store;