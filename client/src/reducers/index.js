import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import questionReducer from '../reducers/questionReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import storesReducer from './storesReducer';

export default combineReducers({
	form: formReducer,
	question: questionReducer,
	category: categoriesReducer,
	store: storesReducer
});
