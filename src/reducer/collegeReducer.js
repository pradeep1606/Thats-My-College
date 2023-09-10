const collegeReducer = (state, action) => {
    switch (action.type) {
        case 'GET SINGLE COLLEGE':
            return {
                ...state,
                singleCollge: action.payload,
            };
        case 'GET_FEATURE_COLLEGE':
            const featuredColleges = state.colleges.filter(college => college.featured);
            return {
                ...state,
                featureColleges: featuredColleges,
            };

        default:
            return state;
    }
};

export default collegeReducer;
