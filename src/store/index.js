import { configureStore } from "@reduxjs/toolkit";
import { FilterCollege } from "./slices/FilterCollege";
import { SingleCollege } from "./slices/SingleCollege";
import { FeaturedSlice } from "./slices/FeaturedSlice";
import { SearchCollege } from "./slices/SearchCollege";

const store = configureStore({
    reducer: {
        allCollege: FilterCollege.reducer,
        singleCollege: SingleCollege.reducer,
        featuredCollege: FeaturedSlice.reducer,
        searchCollege: SearchCollege.reducer,
    }
});

export default store;