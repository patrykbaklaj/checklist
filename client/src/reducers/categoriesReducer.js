import { FETCH_CATEGORIES, FETCH_CATEGORY } from '../actions/types';

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
        default:
            return state;
    }
};

export default categoriesReducer;
