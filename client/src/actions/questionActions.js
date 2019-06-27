import question from '../apis/questions';
import { ADD_QUESTION, FETCH_QUESTIONS } from './types';

export const addQuestion = formVals => async dispatch => {
    const { questionID, questionPoints, questionTitle } = formVals;
    const newQuestion = {
        name: questionTitle,
        appID: questionID,
        points: questionPoints,
        answer: null
    };

    try {
        const response = await question.post('/', newQuestion);

        dispatch({
            type: ADD_QUESTION,
            payload: response.data
        });
    } catch (e) {
        throw e;
    }
};

export const fetchQuestions = () => async dispatch => {
    try {
        const response = await question.get('/');

        dispatch({
            type: FETCH_QUESTIONS,
            payload: response.data
        });
    } catch (e) {
        throw e;
    }
};
