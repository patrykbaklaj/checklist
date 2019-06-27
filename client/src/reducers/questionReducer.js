import { ADD_QUESTION } from '../actions/types';

const questionReducer = (state = { questions: [] }, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.payload]
            };
        default: {
            return state;
        }
    }
};

export default questionReducer;
