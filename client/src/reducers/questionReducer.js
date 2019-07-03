import {
    ADD_QUESTION,
    FETCH_QUESTIONS,
    DELETE_QUESTION
} from '../actions/types';

const questionReducer = (state = { questions: [] }, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.payload]
            };
        case FETCH_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            };
        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(
                    question => question._id !== action.payload
                )
            };
        default: {
            return state;
        }
    }
};

export default questionReducer;
