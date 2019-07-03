import { FETCH_CATEGORIES, FETCH_CATEGORY, DELETE_CATEGORY } from '../actions/types';

const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: [...action.payload]
            };
        case FETCH_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category._id !== action.payload)
            }
        default:
            return state;
    }
};

export default categoriesReducer;
