const filterReducer = (state1, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state1,
        isLoading: true,
      };
    case 'LOAD ALL COLLEGE':
      return {
        ...state1,
        filter_college: [...action.payload],
        all_college: [...action.payload],
      };

    case 'UPDATE FILTER VALUE':
      const { value, isChecked } = action.payload;

      if (isChecked) {
        // Filter colleges based on the selected collegeType 0kkkkkk
        const filteredColleges = state1.all_college.filter(college => college.collegeType.includes(value));
        return {
          ...state1,
          filter_college: filteredColleges,
        };
      } else {
        // If checkbox is unchecked, update filter_college to all_college
        return {
          ...state1,
          filter_college: [...state1.all_college],
        };
      }

    default:
      return state1;
  }
};

export default filterReducer;
