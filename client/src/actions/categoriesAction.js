import { FETCH_CATEGORIES, FETCH_CATEGORY, ADD_CATEGORY } from './types';
import categories from '../apis/categories';

export const fetchCategories = () => async dispatch => {
    try {
        const response = await categories.get('/');

        dispatch({
            type: FETCH_CATEGORIES,
            payload: response.data
        });
    } catch (e) {
        throw e;
    }
};

export const fetchCategory = id => async dispatch => {
    try {
        const response = await categories.get(`/${id}`);

        dispatch({
            type: FETCH_CATEGORY,
            payload: response.data
        });
    } catch (e) {
        throw e;
    }
};

export const addCategory = formVals => async dispatch => {
    // name, appID, questions = []
    const { categoryID, categoryName } = formVals;
    const newCategory = {
        name: categoryName,
        appID: categoryID,
        questions: []
    };

    const objKeys = Object.keys(formVals);
    objKeys.forEach(el => {
        if (el.includes('qid-') && formVals[el]) {
            newCategory.questions.push(el.slice(4));
        }
    });

    console.log(newCategory);
    const response = await categories.post('/', newCategory);

    dispatch({
        type: ADD_CATEGORY,
        payload: newCategory
    });
};
