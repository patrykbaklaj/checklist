import question from '../apis/questions';
import { ADD_QUESTION } from './types';

export const addQuestion = formVals => async dispatch => {
    const { questionID, questionPoints, questionTitle } = formVals;
    const newQuestion = {
        name: questionTitle,
        appID: questionID,
        points: questionPoints,
        answer: null
    };

    const response = await question.post('/', newQuestion);

    dispatch({
        type: ADD_QUESTION,
        payload: response.data
    });

};
