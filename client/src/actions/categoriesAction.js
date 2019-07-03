import {
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY
} from './types';
import categories from '../apis/categories';
import history from '../history';

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
    const newCategory = parseCategory(formVals);
    try {
        const response = await categories.post('/', newCategory);

        dispatch({
            type: ADD_CATEGORY,
            payload: response.data
        });

        history.push('/admin/categories/list');
    } catch (e) {
        throw e;
    }
};

export const editCategory = formVals => async dispatch => {
    const newCategory = parseCategory(formVals);
    try {
        const response = await categories.patch(`/${formVals.id}`, newCategory);

        dispatch({
            type: EDIT_CATEGORY,
            payload: response.data
        });

        history.push('/admin/categories/list');
    } catch (e) {
        throw e;
    }
};

// DELETE CATEGORY
export const deleteCategory = id => async dispatch => {
    try {
        const response = await categories.delete(`/${id}`);

        dispatch({
            type: DELETE_CATEGORY,
            // id to return from server
            payload: response.data
        });
        history.push('/admin/categories/list');
    } catch (e) {
        throw e;
    }
};

// helper function to construct new category from Form Values
// Used in addCategory and editCategory
const parseCategory = formVals => {
    const { categoryID, categoryName, id = null } = formVals;
    const newCategory = {
        name: categoryName,
        appID: categoryID,
        questions: [],
        id
    };

    const objKeys = Object.keys(formVals);
    objKeys.forEach(el => {
        if (el.includes('qid-') && formVals[el]) {
            newCategory.questions.push(el.slice(4));
        }
    });

    return newCategory;
};
