"use client"

import { CollegeContext } from "./collegeContext";
const { useContext, createContext, useReducer, useEffect } = require("react");
import reducer from "@/reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_college: [],
    all_college: [],
    isLoading: true,
}

export const FilterContextProvider = ({ children }) => {
    const { state } = useContext(CollegeContext);
    const { colleges } = state;
    const [state1, dispatch] = useReducer(reducer, initialState);

    // update Filter value
    const updateFilterValue = (event) => {
        try {
            let value = event.target.value;
            let isChecked = event.target.checked;
            // console.log(value, isChecked);
            return dispatch({ type: "UPDATE FILTER VALUE", payload: { value, isChecked } })
        } catch (error) {
            console.log("Api error", error);
        }
    }


    // Load all College
    useEffect(() => {
        dispatch({ type: "LOAD ALL COLLEGE", payload: colleges })
    }, [colleges])


    return (
        <FilterContext.Provider value={{ ...state1, updateFilterValue }} >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}