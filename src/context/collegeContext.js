"use client"

import React, { createContext, useReducer } from 'react';
import collegeData from '../app/api/colleges.json'
import collegeReducer from '../reducer/collegeReducer';

const CollegeContext = createContext();

const initialState = {
    colleges: collegeData,
    singleCollge: {},
    featureColleges: {},
};

const CollegeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(collegeReducer, initialState);

    const getSingleCollege = async (collegeId) => {
        // console.log(collegeId, state.colleges);
        const college = await state.colleges.find((currElem) => currElem.id === collegeId);
        if (college) {
            dispatch({ type: 'GET SINGLE COLLEGE', payload: college });
        }
    };

    const getFeatureCollege = () => {
        // console.log("feature college");
        dispatch({ type: 'GET_FEATURE_COLLEGE' })
    }

    return (
        <CollegeContext.Provider value={{ state, getSingleCollege, getFeatureCollege }}>
            {children}
        </CollegeContext.Provider>
    );
};

export { CollegeProvider, CollegeContext }
