import { configureStore } from "@reduxjs/toolkit";
import { FilterCollege } from "./slices/FilterCollege";
import { SingleCollege } from "./slices/SingleCollege";
import { FeaturedSlice } from "./slices/FeaturedSlice";
import { SearchCollege } from "./slices/SearchCollege";
import { LoginSlice } from "./slices/LoginSlice";

const store = configureStore({
    reducer: {
        allCollege: FilterCollege.reducer,
        singleCollege: SingleCollege.reducer,
        featuredCollege: FeaturedSlice.reducer,
        searchCollege: SearchCollege.reducer,
        loginStatus: LoginSlice.reducer,
    }
});

export default store;